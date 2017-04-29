import React from 'react';

const Table = ({ table, toPercent }) => (
  <div className="table">
    {table.map((row, i) => (
      <div key={i} className="row">
        {row.map((x, j) => (
          <div
            key={`${i}${j}`}
            className="cell"
            style={{ background: `rgba(74, 174, 53, ${x})` }}
          >
            {toPercent(x)}
          </div>
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

      .cell {
        display: table-cell;
        padding: 10px;
      }
     `}</style>
  </div>
);

export default Table;
