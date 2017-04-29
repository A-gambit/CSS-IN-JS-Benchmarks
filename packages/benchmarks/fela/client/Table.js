import React from 'react';
import { createRenderer } from 'fela';
import { Provider, createComponent } from 'react-fela';

const Table = createComponent(props => ({
  display: 'table',
  'margin-top': '10px',
}));

const Row = createComponent(props => ({
  display: 'table-row',
}));

const Cell = createComponent(props => ({
  display: 'table-cell',
  padding: '10px',
  background: `rgba(74, 174, 53, ${props.value})`,
}));

const renderer = createRenderer();
const mountNode = document.createElement('style');
document.head.appendChild(mountNode);

export default ({ table, toPercent }) => (
  <Provider renderer={renderer} mountNode={mountNode}>
    <Table>
      {table.map((row, i) => (
        <Row key={i}>
          {row.map((x, j) => (
            <Cell key={`${i}${j}`} value={x}>{toPercent(x)}</Cell>
          ))}
        </Row>
      ))}
    </Table>
  </Provider>
);
