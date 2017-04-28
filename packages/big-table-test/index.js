const connect = require('connect');
const serveStatic = require('serve-static');

const shell = require('shelljs');

const http = require('http');
const path = require('path');
const fs = require('fs');

const Lighthouse = require('lighthouse');
const { ChromeLauncher } = require('lighthouse/lighthouse-cli/chrome-launcher.js');

const packageJson = 'package.json';
const nodeModules = 'node_modules';

run();

function launchChromeAndRunLighthouse(url, flags, config) {
  const launcher = new ChromeLauncher({
    port: 9222,
    autoSelectChrome: true
  });
  return launcher
    .isDebuggerReady()
    .catch(() => {
      if (flags.skipAutolaunch) {
        return;
      }
      return launcher.run();
    })
    .then(() => Lighthouse(url, flags, config))
    .then(results => launcher.kill().then(() => results))
    .catch(err => {
      return launcher.kill().then(() => {
        throw err;
      }, console.error);
    });
}

function getPackageList(dir, rootPathLength, packages = []) {
  const files = fs.readdirSync(dir);

  if (files.includes(packageJson)) {
    packages.push(dir);
    return packages;
  }
  files.forEach(function (file) {
    const filePath = path.join(dir, file);
    const stat = fs.lstatSync(filePath);
    if (stat.isDirectory() && file != nodeModules) {
      packages = getPackageList(filePath, rootPathLength, packages);
    }
  });
  return packages;
}

function getAverageValue(arr) {
  let total = 0;
  for(let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / arr.length;
}

async function runTestCase(url) {
  const config = require('lighthouse/lighthouse-core/config/perf.json');
  const flags = {maxWaitForLoad: 60000, interactive: true};

  const mountDuration = [];
  const rerenderDuration = [];

  let butch = true;

  for (let i = 0; i < 5; i++) {
    try {
      const currentRes = await launchChromeAndRunLighthouse(`${url}&butch=${butch}`, flags, config);
      const values = currentRes.audits['user-timings'].extendedInfo.value;
      mountDuration.push(values[2].duration);
      let curRerenderDuration = []
      for (let i = 3; i < values.length; i++) {
        if (!values[i].duration) {
          continue
        }
        curRerenderDuration.push(values[i].duration);
      }
      if (curRerenderDuration.length) {
        rerenderDuration.push(getAverageValue(curRerenderDuration));
      }
      else if (butch) {
        i--;
        butch = false;
      }
    }
    catch (err) {
      console.log(err);
      i--;
    }
  }
  return {
    mountDuration: getAverageValue(mountDuration),
    rerenderDuration: getAverageValue(rerenderDuration)
  };
}

function getIcon(value) {
  return value ? '+' : '-'
}

function format(value) {
  return value.toLocaleString(undefined, {maximumFractionDigits: 2});
}

function arrayToTable (array, cols) {
  const nextLine = '\r\n';
  const nextCol = ' | ';

  let table = '## Results: *(sorted by rerender time)*' + nextLine + nextLine;
  table += cols.join(nextCol);
  table += nextLine;
  table += cols.map(() => ':---').join(nextCol);
  table += nextLine;
  array.forEach(item => {
    table += [
      item.link ? `[${item.name}](${item.link})` : item.name,
      getIcon(item.useCSS),
      getIcon(item.useInlineStyles),
      format(item.mountDuration),
      format(item.rerenderDuration)
    ].join(nextCol) + nextLine;
  })
  return table;
}

function getPackageInfo(path) {
  const json = JSON.parse(fs.readFileSync(path + '/' + packageJson));
  return json.benchmarks;
}

function writeResults(res) {
  const sortRes = res.sort((a, b) => a.rerenderDuration - b.rerenderDuration);
  const table = arrayToTable(
    sortRes,
    ['Solution', 'Use CSS', 'Use Inline-Styles', 'Mount Time (ms)', 'Rerender Time (ms)']
  );
  console.log(table);
  fs.writeFileSync(__dirname + '/../../RESULT.md', table);
}

async function run() {
  let res = [];

  const port = 3000;
  const rootPath = path.join(__dirname, '../big-table');
  const packages = getPackageList(rootPath, rootPath.length + 1);

  shell.config.verbose = true;

  for (let i = 0; i < packages.length; i++) {
    const app = connect();
    const packageInfo = getPackageInfo(packages[i]);
    const currentPort = port + i;

    if (!process.env.WITHOUT_INSTALL) {
      shell.cd(packages[i]);
      shell.rm('-rf', nodeModules);
      shell.exec('yarn');
      shell.exec('npm run build');
    }

    app.use(serveStatic(packages[i] + '/static', {
      index: ['index.html']
    }));
    const server = http.createServer(app).listen(currentPort);
    console.log('[LOG]: Listen Port:', currentPort);
    const url = `http://localhost:${currentPort}?test=true`;

    const packageRes = await runTestCase(url);
    res.push({
      name: packageInfo.name,
      useInlineStyles: packageInfo.useInlineStyles || false,
      useCSS: packageInfo.useCSS || false,
      rerenderDuration: packageRes.rerenderDuration,
      mountDuration: packageRes.mountDuration
    });

    server.close();
    console.log('[LOG]:', res);
  }

  writeResults(res);
}
