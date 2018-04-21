import React from 'react';
import cxs from 'cxs';

const cxsTable = cxs({
  display: 'table',
  marginTop: 10,
});

const cxsRow = cxs({
  display: 'table-row',
});

const cxsCell = cxs({
  display: 'table-cell',
  padding: 10,
});

const Table = ({ table, toPercent }) => (
  <div className={cxsTable}>
    {table.map((row, i) => (
      <div className={cxsRow} key={i}>
        {row.map((x, j) => {
          const cellBgClass = cxs({
            background: `rgba(74, 174, 53, ${x})`,
          });
          return (
            <div key={`${i}${j}`} className={`${cxsCell} ${cellBgClass}`}>
              {toPercent(x)}
            </div>
          );
        })}
      </div>
    ))}
  </div>
);

export default Table;
