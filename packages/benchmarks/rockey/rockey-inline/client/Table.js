import React from 'react';
import 'rockey-react/speedy';
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
`;

export default ({ table, toPercent }) => (
  <Table>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((x, j) => (
          <Cell
            key={`${i}${j}`}
            value={x}
            style={{ background: `rgba(74, 174, 53, ${x})` }}
          >
            {toPercent(x)}
          </Cell>
        ))}
      </Row>
    ))}
  </Table>
);
