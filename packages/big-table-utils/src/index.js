import React from 'react';

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

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      table: getTable()
    };
  }

  componentWillMount() {
    if (document.location.search.includes('test=true')) {
      performance.mark('startMount');
    }
  }

  async runTestRerender() {
    const input = document.querySelector('input');
    for (let i = 0; i < 10; i++) {
      await new Promise(resolve => {
        performance.mark('startRerender' + i);
        input.click();

        setTimeout(() => {
          setTimeout(() => {
            performance.mark('endRerender' + i);
            performance.measure('measureRerender' + i, 'startRerender' + i, 'endRerender' + i);
            resolve();
          }, 0)
        }, 0);
      });
    }
  }

  componentDidMount() {
    if (!document.location.search.includes('test=true')) {
      return
    }
    performance.mark('endMount');
    performance.measure('measureMount', 'startMount', 'endMount');

    if (document.location.search.includes('butch=true')) {
      return this.runTestRerender()
    }

    const input = document.querySelector('input');
    performance.mark('startRerender');
    input.click();
    setTimeout(() => {
      performance.mark('endRerender');
      performance.measure('measureRerender', 'startRerender', 'endRerender');
    }, 0);
  }

  handleClick = () => {
    this.setState({table: getTable()})
  }

  render() {
    const {table: Table} = this.props
    return (
      <div>
        <div>
          <input type='submit' value='Generate' onClick={this.handleClick} />
          {' '}
          <span>{ getUniqueSize(this.state.table) } unique cells</span>
        </div>
        <Table table={this.state.table} toPercent={toPercent} />
      </div>
    );
  }
};

