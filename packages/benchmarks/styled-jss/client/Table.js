import React from 'react';
import styled from 'styled-jss';

const Table = styled('div', {
  display: 'table',
  marginTop: 10
});

const Row = styled('div', {
  display: 'table-row'
});

const Cell = styled('div', {
  display: 'table-cell',
  padding: 10,
  background: props => `rgba(74, 174, 53, ${props.value})`
});

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

export default TableComponent;
