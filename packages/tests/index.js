const connect = require('connect');
const serveStatic = require('serve-static');

const shell = require('shelljs');
const chalk = require('chalk');

const http = require('http');
const path = require('path');
const fs = require('fs');
const { argv } = require('yargs');

const Lighthouse = require('lighthouse');
const {
  ChromeLauncher,
} = require('lighthouse/lighthouse-cli/chrome-launcher.js');

const packageJson = 'package.json';

const filterPackages = argv._.length ? argv._ : null;

run();

function launchChromeAndRunLighthouse(url, flags, config) {
  const launcher = new ChromeLauncher({
    port: 9222,
    startingUrl: '',
    autoSelectChrome: true,
  });
  return launcher
    .isDebuggerReady()
    .catch(() => {
      if (flags.skipAutolaunch) {
        return;
      }
      return launcher.run();
    })
    .then(() => new Promise(resolve => setTimeout(resolve, 500)))
    .then(() => Lighthouse(url, flags, config))
    .then(results => launcher.kill().then(() => results))
    .catch(err => {
      return launcher.kill().then(() => {
        throw err;
      }, console.error);
    });
}

function getPackageList() {
  const lernaConfig = require('../../lerna.json');

  return lernaConfig.packages
    .filter(pckg => pckg.indexOf('packages/benchmarks/') === 0)
    .map(pckg => {
      // NOTE: use NODE_PATH env variable to prevent .. .. ..
      const { benchmarks } = require(path.join(
        '..',
        '..',
        pckg,
        'package.json'
      ));

      return Object.assign({}, benchmarks, {
        path: path.resolve(__dirname, '..', '..', pckg),
      });
    })
    .filter(info => {
      return !filterPackages || filterPackages.indexOf(info.name) !== -1;
    });
}

function getAverageValue(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

async function runTestCase(url) {
  const config = require('lighthouse/lighthouse-core/config/perf.json');
  const flags = { maxWaitForLoad: 60000, interactive: true };

  const mountDuration = [];
  const rerenderDuration = [];

  let butch = true;

  for (let i = 0; i < 5; i++) {
    try {
      const currentRes = await launchChromeAndRunLighthouse(
        `${url}&butch=${butch}`,
        flags,
        config
      );
      const values = currentRes.audits['user-timings'].extendedInfo.value;
      const mountTime = values[2].duration;
      mountTime && mountDuration.push(mountTime);
      let curRerenderDuration = [];
      for (let i = 3; i < values.length; i++) {
        if (!values[i].duration) {
          continue;
        }
        curRerenderDuration.push(values[i].duration);
      }
      if (curRerenderDuration.length) {
        rerenderDuration.push(getAverageValue(curRerenderDuration));
      } else if (butch) {
        i--;
        butch = false;
      }
    } catch (err) {
      console.log(err);
      i--;
    }
  }
  return {
    mountDuration: getAverageValue(mountDuration),
    rerenderDuration: getAverageValue(rerenderDuration),
  };
}

function getIcon(value) {
  return value ? '+' : '-';
}

function format(value) {
  return value.toLocaleString(undefined, { maximumFractionDigits: 2 });
}

function arrayToTable(array, cols) {
  const nextLine = '\r\n';
  const nextCol = ' | ';

  let table = `## Results:${nextLine}*(sorted by rerender time)*${nextLine}${nextLine}`;

  table += cols.join(nextCol);
  table += nextLine;
  table += cols.map(() => ':---').join(nextCol);
  table += nextLine;

  array.forEach(item => {
    table +=
      [
        item.link ? `[${item.name}](${item.link})` : item.name,
        getIcon(item.useCSS),
        getIcon(item.useInlineStyles),
        format(item.mountDuration),
        format(item.rerenderDuration),
      ].join(nextCol) + nextLine;
  });

  return table;
}

function writeResults(res) {
  const sortRes = res.sort((a, b) => a.rerenderDuration - b.rerenderDuration);

  const table = arrayToTable(sortRes, [
    'Solution',
    'Use CSS',
    'Use Inline-Styles',
    'Mount Time',
    'Rerender time',
  ]);

  if (!filterPackages) {
    sortRes.map(res => {
      console.log('');
      console.log(`${chalk.green(res.name)}`);
      console.log(`  - Mount time: ${chalk.cyan(res.mountDuration)}`);
      console.log(`  - Renderer time: ${chalk.cyan(res.rerenderDuration)}`);
      console.log('');
    });

    fs.writeFileSync(__dirname + '/../../RESULT.md', table);

    console.log('');
    console.log('Saved into RESULT.md');
    console.log('');
  }
}

async function run() {
  let res = [];

  const port = 3000;
  const packages = getPackageList();

  shell.config.verbose = true;

  if (!packages.length) {
    console.log('There are no packages');
    return;
  }

  console.log('');
  if (filterPackages) {
    console.log(
      `${chalk.green('Run benchmark')} for ${filterPackages
        .map(n => chalk.cyan(n))
        .join(', ')} packages`
    );
    console.log(`  note that metrics will not be saved to RESULTS.md`);
  } else {
    console.log(
      `${chalk.green('Run benchmark')}. Found ${packages.length} packages`
    );
  }
  console.log('');

  for (let i = 0; i < packages.length; i++) {
    const app = connect();
    const packageInfo = packages[i];
    const currentPort = port + i;

    console.log('');
    console.log(
      `  (${i + 1}/${packages.length}) ${chalk.green(packageInfo.name)} at port ${currentPort}`
    );
    console.log('');

    if (!process.env.SKIP_BUILD) {
      console.log(`  ${chalk.cyan('prepre package build')}`);
      console.log('');
      shell.exec(`npm --prefix ${packageInfo.path} run build`);

      console.log('');
      console.log(`  ${chalk.cyan('build completed')}`);
      console.log('');
    }

    app.use(
      serveStatic(path.join(packageInfo.path, 'static'), {
        index: ['index.html'],
      })
    );

    const server = http.createServer(app).listen(currentPort);
    const url = `http://localhost:${currentPort}?test=true`;

    console.log(`  run tests...`);
    const packageRes = await runTestCase(url);

    console.log('');
    console.log(`  ${chalk.green(packageInfo.name)}:`);
    console.log(`    - Rerender Duration: ${packageRes.rerenderDuration}`);
    console.log(`    - Mount Duration: ${packageRes.mountDuration}`);

    res.push({
      name: packageInfo.name,
      useInlineStyles: packageInfo.useInlineStyles || false,
      useCSS: packageInfo.useCSS || false,
      link: packageInfo.link,
      rerenderDuration: packageRes.rerenderDuration,
      mountDuration: packageRes.mountDuration,
    });

    server.close();
  }

  writeResults(res);
}
