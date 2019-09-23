import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  table: {
    display: 'table',
    marginTop: 10,
  },
  row: {
    display: 'table-row',
  },
});

const useStylesCell = createUseStyles({
  cell: {
    display: 'table-cell',
    padding: 10,
    background: props => `rgba(74, 174, 53, ${props.value})`,
  },
});

const Cell = ({ children, ...props }) => {
  const classes = useStylesCell(props);
  return <div className={classes.cell}>{children}</div>;
};

const Table = ({ table, toPercent }) => {
  const classes = useStyles();
  return (
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
};

export default Table;
