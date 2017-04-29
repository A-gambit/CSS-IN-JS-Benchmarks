import React from 'react';

const Table = ({ table, toPercent }) => (
  <div>
    {table.map((row, i) => (
      <div key={i}>
        {row.map((x, j) => (
          <div key={`${i}${j}`}>
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Table;
