import React from 'react';
import { create } from 'nano-css';
import { addon as addonRule } from 'nano-css/addon/rule';
import { addon as addonCache } from 'nano-css/addon/cache';
import { addon as addonJsx } from 'nano-css/addon/jsx';
import { addon as addonStyle } from 'nano-css/addon/style';
import { addon as addonStyled } from 'nano-css/addon/styled';

const nano = create({
  h: React.createElement,
});

addonRule(nano);
addonCache(nano);
addonJsx(nano);
addonStyle(nano);
addonStyled(nano);

const { styled } = nano;

const Table_ = styled.div({
  display: 'table',
  marginTop: '10px',
});

const Row = styled.div({
  display: 'table-row',
});

const Cell = styled.div({
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
