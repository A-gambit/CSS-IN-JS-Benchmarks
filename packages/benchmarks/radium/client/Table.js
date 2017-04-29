import React from 'react';
import Radium from 'radium';

const styles = {
  table: {
    display: 'table',
    marginTop: 10,
  },
  row: {
    display: 'table-row',
  },
  cell: {
    display: 'table-cell',
    padding: 10,
  },
};

const Table = ({ table, toPercent }) => (
  <div style={styles.table}>
    {table.map((row, i) => (
      <div style={styles.row} key={i}>
        {row.map((x, j) => (
          <div
            key={`${i}${j}`}
            style={[styles.cell, { background: `rgba(74, 174, 53, ${x})` }]}
          >
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Radium(Table);
