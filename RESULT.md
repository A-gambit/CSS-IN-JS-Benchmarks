## Results:

Solution | Use CSS | Use Inline-Styles | Mount Time | Rerender time
:--- | :--- | :--- | :--- | :---
aphrodite | + | + | 36.97060000000001 | 51.586239999999975
glamorous | + | - | 161.8318 | 210.41988
glamorous + glamour css | + | - | 205.86599999999999 | 292.6501166666667
radium | - | + | 67.15979999999999 | 70.80441999999998
react | - | - | 18.027199999999993 | 46.34185999999999
react + css | + | + | 29.857799999999997 | 51.90430000000002
react-jss | + | - | 133.70880000000002 | 225.66444
styld | + | - | 166.53200000000015 | 240.30083999999997
styled-components v1 decouple-cell | + | - | 1274.8026666666667 | 3291.2158000000004
styled-components v1 + inline-styles | + | + | 75.86919999999995 | 72.56210000000002
styled-components v1 | + | - | 1395.3443333333335 | 3602.9619999999995
styled-components v2 decouple-cell | + | - | 946.3799999999999 | 2456.2298
styled-components v2 + inline-styles | + | + | 73.45320000000001 | 118.3712
styled-components v2 | + | - | 1193.7945 | 3151.5308
styled-jsx | + | + | 41.22579999999998 | 52.99584
styletron | + | - | 63.31700000000005 | 73.52281999999997
