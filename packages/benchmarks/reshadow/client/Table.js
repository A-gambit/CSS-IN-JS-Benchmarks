import React from 'react';
import styled from 'reshadow';

const Table = ({table, toPercent}) => styled`
  table {
    display: table;
    margin: 10px 10px 10px 0;
  }

  row {
    display: table-row;
  }
`(
  <table as="div">
    {table.map((row, i) => (
      <row>
        {row.map((x, j) => styled`
          cell {
            display: table-cell;
            padding: 10px;
            background: rgba(74, 174, 53, ${x});
          }
        `(<cell>{toPercent(x)}</cell>))}
      </row>
    ))}
  </table>,
);

export default Table;
