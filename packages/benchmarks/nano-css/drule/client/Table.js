import React from 'react';
import { create } from 'nano-css';
import { addon as addonRule } from 'nano-css/addon/rule';
import { addon as addonCache } from 'nano-css/addon/cache';
import { addon as addonDrule } from 'nano-css/addon/drule';

const nano = create();

addonRule(nano);
addonCache(nano);
addonDrule(nano);

const { drule } = nano;

const classNameTable = drule({
  display: 'table',
  marginTop: '10px',
});

const classNameRow = drule({
  display: 'table-row',
});

const classNameCell = drule({
  display: 'table-cell',
  padding: '10px',
});

const Table = ({ table, toPercent }) => (
  <div className={classNameTable()}>
    {table.map((row, i) => (
      <div key={i} className={classNameRow()}>
        {row.map((x, j) => (
          <div
            className={classNameCell({
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
