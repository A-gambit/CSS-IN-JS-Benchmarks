import React from 'react';
import { styled, StyletronProvider } from 'styletron-react';
import Styletron from 'styletron-client';

const Table = styled('div', {
  display: 'table',
  marginTop: '10px'
});

const Row = styled('div', {
  display: 'table-row'
});

const Cell = styled('div', props => ({
  display: 'table-cell',
  padding: '10px',
  background: `rgba(74, 174, 53, ${props.value})`
}));

const TableComponent = ({ table, toPercent }) =>
  <Table>
    {
      table.map((row, i) =>
        <Row key={i}>
          {
            row.map((x, j) =>
              <Cell key={`${i}${j}`} value={x}>{toPercent(x)}</Cell>
            )
          }
        </Row>
      )
    }
  </Table>

const styleSheet = document.createElement('style');
document.head.appendChild(styleSheet);

const styletron = new Styletron([styleSheet]);

export default ({ table, toPercent }) => (
  <StyletronProvider styletron={styletron}>
    <TableComponent table={table} toPercent={toPercent} />
  </StyletronProvider>
);

