import React from 'react';
import { create } from 'nano-css';
import { addon as addonRule } from 'nano-css/addon/rule';

const nano = create();

addonRule(nano);

const { rule } = nano;

const classNameTable = rule({
  display: 'table',
  marginTop: '10px',
});

const classNameRow = rule({
  display: 'table-row',
});

const classNameCell = rule({
  display: 'table-cell',
  padding: '10px',
});

const Table = ({ table, toPercent }) => (
  <div className={classNameTable}>
    {table.map((row, i) => (
      <div key={i} className={classNameRow}>
        {row.map((x, j) => (
          <div
            className={classNameCell}
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
