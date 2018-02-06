import React from 'react';
import styled, { css } from 'react-emotion';

const Table = styled('div')`
  display: table;
  margin-top: 10px;
`;

const Row = styled('div')`
  display: table-row;
`;

const Cell = styled('div')`
  display: table-cell;
  padding: 10px;
  background: rgba(74, 174, 53, ${({ alpha }) => alpha})
`;

export default ({ table, toPercent }) => (
  <Table>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((alpha, j) => (
          <Cell key={`${i}${j}`} alpha={alpha}>
            {toPercent(alpha)}
          </Cell>
        ))}
      </Row>
    ))}
  </Table>
);
