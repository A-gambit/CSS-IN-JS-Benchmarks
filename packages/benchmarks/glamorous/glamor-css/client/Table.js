import React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

const Table = glamorous.div({
  display: 'table',
  marginTop: 10,
});

const Row = glamorous.div({
  display: 'table-row',
});

const Cell = glamorous.div({
  display: 'table-cell',
  padding: '10px',
});

export default ({ table, toPercent }) => (
  <Table>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((x, j) => {
          const style = css({ background: `rgba(74, 174, 53, ${x})` });
          return (
            <Cell key={`${i}${j}`} className={style.toString()}>
              {toPercent(x)}
            </Cell>
          );
        })}
      </Row>
    ))}
  </Table>
);
