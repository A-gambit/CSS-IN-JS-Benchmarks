import React from 'react';
import styled from 'emotion/react';

const Table = styled.div`
  display: table;
  margin-top: 10px;
`;

const Row = styled.div`
  display: table-row;
`;

const CellDefault = styled.div`
  display: table-cell;
  padding: 10px;
`;

const Cell = styled('div')`
  display: table-cell;
  padding: 10px;
  background: rgba(74, 174, 53, var(--x))
`;

export default ({ table, toPercent }) => (
  <Table>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((x, j) => (
          <Cell key={`${i}${j}`} style={{ '--x': x }}>
            {toPercent(x)}
          </Cell>
        ))}
      </Row>
    ))}
  </Table>
);
