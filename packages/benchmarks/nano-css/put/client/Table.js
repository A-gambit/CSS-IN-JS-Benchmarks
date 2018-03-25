import React from 'react';
import { create } from 'nano-css';
import { addon as addonRule } from 'nano-css/addon/rule';

const nano = create();

addonRule(nano);

const { put } = nano;

put('.table', {
  display: 'table',
  marginTop: '10px',
});

put('.row', {
  display: 'table-row',
});

put('.cell', {
  display: 'table-cell',
  padding: '10px',
});

const Table = ({ table, toPercent }) => (
  <div className="table">
    {table.map((row, i) => (
      <div key={i} className="row">
        {row.map((x, j) => (
          <div
            className="cell"
            key={String(i) + String(j)}
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
