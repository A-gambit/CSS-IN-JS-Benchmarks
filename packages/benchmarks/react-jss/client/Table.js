import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  table: {
    display: 'table',
    marginTop: 10,
  },
  row: {
    display: 'table-row',
  },
};

const stylesCell = {
  cell: {
    display: 'table-cell',
    padding: 10,
    background: props => `rgba(74, 174, 53, ${props.value})`,
  },
};

const CellComponent = ({ classes, children }) => (
  <div className={classes.cell}>{children}</div>
);

const Cell = injectSheet(stylesCell)(CellComponent);

const Table = ({ classes, table, toPercent }) => (
  <div className={classes.table}>
    {table.map((row, i) => (
      <div className={classes.row} key={i}>
        {row.map((x, j) => (
          <Cell key={`${i}${j}`} value={x}>{toPercent(x)}</Cell>
        ))}
      </div>
    ))}
  </div>
);

export default injectSheet(styles)(Table);
