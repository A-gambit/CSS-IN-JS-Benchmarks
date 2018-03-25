import React from 'react';

let id = 0;

export const css = h => (tag, css) => props => {
  const className = '_' + id++;
  const newProps = Object.assign({}, props, { className: className });
  const rawCss = '.' + className + '{' + css(newProps) + '}';
  return h(
    tag,
    newProps,
    h('style', {
      dangerouslySetInnerHTML: { __html: rawCss },
    }),
    props.children
  );
};

const styled = css(React.createElement);

const Table_ = styled(
  'div',
  () =>
    `
  display: table;
  margin-top: 10px;
`
);

const Row = styled(
  'div',
  () =>
    `
  display: table-row;
`
);

const Cell = styled(
  'div',
  ({ value }) =>
    `
  display: table-cell;
  padding: 10px;
  background-color: rgba(74, 174, 53, ${value});
`
);

const Table = ({ table, toPercent }) => (
  <Table_>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((x, j) => (
          <Cell key={String(i) + String(j)} value={x}>
            {toPercent(x)}
          </Cell>
        ))}
      </Row>
    ))}
  </Table_>
);

export default Table;
