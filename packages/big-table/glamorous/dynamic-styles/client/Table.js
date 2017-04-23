import React from 'react';
import glamorous from 'glamorous';

const Table = glamorous.div({
  display: 'table',
  marginTop: 10
});

const Row = glamorous.div({
  display: 'table-row'
});

const Cell = glamorous.div({
  display: 'table-cell',
  padding: '10px'
}, props => ({
 background: `rgba(74, 174, 53, ${props.value})`
}))

export default ({ table, toPercent }) =>
  <Table>
    {
      table.map((row, i) =>
        <Row key={i}>
          {
            row.map((x, j) => <Cell key={`${i}${j}`} value={x}>{toPercent(x)}</Cell>)
          }
        </Row>
      )
    }
  </Table>
