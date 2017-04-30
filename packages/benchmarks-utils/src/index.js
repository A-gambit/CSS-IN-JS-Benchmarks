import React from 'react';
import asap from 'asap';

const getRandom = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

function getTable(max = 30) {
  let table = [];
  for (let i = 0; i < max; i++) {
    table[i] = [1];
    for (let j = 1; j < max; j++) {
      const next = table[i][j - 1] - Math.random() * table[i][j - 1] / 10;
      table[i].push(next.toFixed(4));
    }
  }
  return table;
}

function getUniqueSize(table) {
  let set = new Set();
  table.forEach(row => row.forEach(x => set.add(x)));
  return set.size;
}

function toPercent(x) {
  return (x * 100).toFixed(2).toString() + '%';
}

async function runTestRerender() {
  const input = document.querySelector('input');
  for (let i = 0; i < 10; i++) {
    await new Promise(resolve => {
      performance.mark('startRerender' + i);
      input.click();

      setTimeout(() => {
        setTimeout(() => {
          performance.mark('endRerender' + i);
          performance.measure(
            'measureRerender' + i,
            'startRerender' + i,
            'endRerender' + i
          );
          resolve();
        }, 0);
      }, 0);
    });
  }
}

function willMount(table) {
  if (!document.location.search.includes('test=true')) return;

  const cellsTotal = table.length * table[0].length - 1;

  const check = () => {
    const cells = document.querySelectorAll('.table > div > div > div');

    const isMounted = [
      cells[0],
      cells[getRandom(0, cellsTotal - 1)],
      cells[cellsTotal],
    ].every(cell => {
      if (!cell) return false;
      const styles = window.getComputedStyle(cell);

      return (
        styles.backgroundColor !== 'rgba(0, 0, 0, 0)' ||
        styles.padding === '10px'
      );
    });

    if (!isMounted) {
      return asap(check);
    }

    didMount();
  };

  performance.mark('startMount');
  asap(check);
}

function didMount() {
  performance.mark('endMount');
  performance.measure('measureMount', 'startMount', 'endMount');

  if (document.location.search.includes('butch=true')) {
    return runTestRerender();
  }

  const input = document.querySelector('input');
  performance.mark('startRerender');
  input.click();
  setTimeout(() => {
    performance.mark('endRerender');
    performance.measure('measureRerender', 'startRerender', 'endRerender');
  }, 0);
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: getTable(),
    };
  }

  componentWillMount() {
    willMount(this.state.table);
  }

  handleClick = () => {
    this.setState({ table: getTable() });
  };

  render() {
    const { table: Table } = this.props;
    return (
      <div>
        <div>
          <input type="submit" value="Generate" onClick={this.handleClick} />
          {' '}
          <span>{getUniqueSize(this.state.table)} unique cells</span>
        </div>
        <div className="table">
          <Table table={this.state.table} toPercent={toPercent} />
        </div>
      </div>
    );
  }
}
