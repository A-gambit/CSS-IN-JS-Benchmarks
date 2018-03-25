import React from 'react';
import { create } from 'nano-css';
import { addon as addonRule } from 'nano-css/addon/rule';
import { addon as addonCache } from 'nano-css/addon/cache';
import { addon as addonSheet } from 'nano-css/addon/sheet';
import { addon as addonDsheet } from 'nano-css/addon/dsheet';

const nano = create();

addonRule(nano);
addonCache(nano);
addonSheet(nano);
addonDsheet(nano);

const { dsheet } = nano;

const styles = dsheet(
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
  <div className={styles.table()}>
    {table.map((row, i) => (
      <div key={i} className={styles.row()}>
        {row.map((x, j) => (
          <div
            className={styles.cell({
              backgroundColor: 'rgba(74,174,53,' + x + ')',
            })}
            key={String(i) + j}
          >
            {toPercent(x)}
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Table;
