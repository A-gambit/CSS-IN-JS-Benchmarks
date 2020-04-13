import React from 'react';
import { useCss } from 'css-system';

const View = ({ as: Component = 'div', css, ...props }) => {
  const className = useCss(css);
  return <Component className={className} {...props} />;
};

export default ({ table, toPercent }) => (
  <View css={{ display: 'table', mt: 10 }}>
    {table.map((row, i) => (
      <View key={i} css={{ display: 'table-row' }}>
        {row.map((x, j) => (
          <View
            key={`${i}${j}`}
            css={{ display: 'table-cell', p: 10 }}
            style={{ background: `rgba(74, 174, 53, ${x})` }}
          >
            {toPercent(x)}
          </View>
        ))}
      </View>
    ))}
  </View>
);
