import React from 'react';
import { mergeStyles } from '@uifabric/merge-styles';

const TableClassName = mergeStyles({
  display: 'table',
  marginTop: 10,
});

const RowClassName = mergeStyles({
  display: 'table-row',
});

const CellClassName = mergeStyles({
  display: 'table-cell',
  padding: '10px',
});

export default ({ table, toPercent }) => (
  <div className={TableClassName}>
    {table.map((row, i) => (
      <div className={RowClassName} key={i}>
        {row.map((x, j) => {
          const dynamicClassName = mergeStyles({
            background: `rgba(74, 174, 53, ${x})`,
          });
          return (
            <div
              key={`${i}${j}`}
              className={`${CellClassName} ${dynamicClassName}`}
            >
              {toPercent(x)}
            </div>
          );
        })}
      </div>
    ))}
  </div>
);
