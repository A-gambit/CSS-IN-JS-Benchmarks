import React from 'react';

const styles = {
  table: {
    display: 'table',
    marginTop: '10px',
  },
  row: {
    display: 'table-row',
  },
};

const Table = ({ table, toPercent }) => (
  <div style={styles.table}>
    {table.map((row, i) => (
      <div key={i} style={styles.row}>
        {row.map((x, j) => (
          <div
            key={String(i) + String(j)}
            style={{
              display: 'table-cell',
              padding: '10px',
              backgroundColor: 'rgba(74, 174, 53, ' + x + ')',
            }}
          >
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Table;
