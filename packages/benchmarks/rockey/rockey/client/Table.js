import React from 'react';
import rockey from 'rockey-react';

const Table = rockey.div`
  display: table;
  margin-top: 10px;
`;

const Row = rockey.div`
  display: table-row;
`;

const Cell = rockey.div`
  display: table-cell;
  padding: 10px;

  background: ${({ value }) => `rgba(74, 174, 53, ${value})`}
`;

export default ({ table, toPercent }) => (
  <Table>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((x, j) => (
          <Cell key={`${i}${j}`} value={x}>{toPercent(x)}</Cell>
        ))}
      </Row>
    ))}
  </Table>
);
