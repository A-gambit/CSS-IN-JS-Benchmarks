import React from 'react';
import styled from 'styled-components';

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

const Cell = styled(CellDefault)`
   background: rgba(74, 174, 53, ${props => props.value});
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
