import React from 'react';
import './Table.css';

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
  </div>
);

export default Table;
