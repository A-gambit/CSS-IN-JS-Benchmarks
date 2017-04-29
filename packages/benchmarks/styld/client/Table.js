import React from 'react';
import injectStyled from 'styld';

const styles = {
  Table: {
    display: 'table',
    marginTop: 10,
  },
  Row: {
    display: 'table-row',
  },
  Cell: {
    display: 'table-cell',
    padding: 10,
    background: props => `rgba(74, 174, 53, ${props.value})`,
  },
};

const TableWrapper = ({ $, table, toPercent }) => {
  const { Table, Row, Cell } = $;
  return (
    <Table>
      {table.map((row, i) => (
        <Row key={i}>
          {row.map((x, j) => (
            <Cell key={`${i}${j}`} _value={x}>{toPercent(x)}</Cell>
          ))}
        </Row>
      ))}
    </Table>
  );
};

export default injectStyled(styles)(TableWrapper);
