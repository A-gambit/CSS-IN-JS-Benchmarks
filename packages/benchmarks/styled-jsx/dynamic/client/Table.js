import React from 'react';

const Cell = ({ value, children }) => (
  <div className="cell">
    {children}
    <style jsx>{`
      .cell {
        display: table-cell;
        padding: 10px;
      }
    `}</style>
    <style jsx>{`.cell { background: rgba(74, 174, 53, ${value}) }`}</style>
  </div>
);

const Table = ({ table, toPercent }) => (
  <div className="table">
    {table.map((row, i) => (
      <div key={i} className="row">
        {row.map((x, j) => (
          <Cell key={`cell-${i}${j}`} value={x}>
            {toPercent(x)}
          </Cell>
        ))}
      </div>
    ))}
    <style jsx>{`
      .table {
        display: table;
        margin: 10px 10px 10px 0;
      }

      .row {
        display: table-row;
      }
    `}</style>
  </div>
);

export default Table;
