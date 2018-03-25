import React from 'react';
import { create } from 'nano-css';
import { addon as addonRule } from 'nano-css/addon/rule';
import { addon as addonCache } from 'nano-css/addon/cache';
import { addon as addonJsx } from 'nano-css/addon/jsx';

const nano = create({
  h: React.createElement,
});

addonRule(nano);
addonCache(nano);
addonJsx(nano);

const { jsx } = nano;

const Table_ = jsx('div', {
  display: 'table',
  marginTop: '10px',
});

const Row = jsx('div', {
  display: 'table-row',
});

const Cell = jsx('div', {
  display: 'table-cell',
  padding: '10px',
});

const Table = ({ table, toPercent }) => (
  <Table_>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((x, j) => (
          <Cell
            key={String(i) + j}
            style={{
              backgroundColor: 'rgba(74,174,53,' + x + ')',
            }}
          >
            {toPercent(x)}
          </Cell>
        ))}
      </Row>
    ))}
  </Table_>
);

export default Table;
