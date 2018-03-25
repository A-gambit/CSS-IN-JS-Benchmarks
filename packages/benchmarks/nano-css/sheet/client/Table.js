import React from 'react';
import { create } from 'nano-css';
import { addon as addonRule } from 'nano-css/addon/rule';
import { addon as addonSheet } from 'nano-css/addon/sheet';

const nano = create();

addonRule(nano);
addonSheet(nano);

const { sheet } = nano;

const styles = sheet(
  {
    table: {
      display: 'table',
      marginTop: '10px',
    },
    row: {
      display: 'table-row',
    },
    cell: {
      display: 'table-cell',
      padding: '10px',
    },
  },
  'Table'
);

const Table = ({ table, toPercent }) => (
  <div className={styles.table}>
    {table.map((row, i) => (
      <div key={i} className={styles.row}>
        {row.map((x, j) => (
          <div
            className={styles.cell}
            key={String(i) + j}
            style={{
              backgroundColor: 'rgba(74,174,53,' + x + ')',
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
