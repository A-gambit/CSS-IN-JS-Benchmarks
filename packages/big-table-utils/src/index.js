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
