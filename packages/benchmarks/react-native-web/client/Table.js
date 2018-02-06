import React from 'react';
import { StyleSheet, Text, View } from 'react-native-web';

const styles = StyleSheet.create({
  table: {
    display: 'table',
    marginTop: 10,
  },
  row: {
    display: 'table-row',
  },
  cell: {
    display: 'table-cell',
    padding: 10,
  },
});

const Table = ({ table, toPercent }) => (
  <View style={styles.table}>
    {table.map((row, i) => (
      <View style={styles.row} key={i}>
        {row.map((x, j) => (
          <View
            key={`${i}${j}`}
            style={[styles.cell, { background: `rgba(74, 174, 53, ${x})` }]}
          >
            <Text>{toPercent(x)}</Text>
          </View>
        ))}
      </View>
    ))}
  </View>
);

export default Table;
