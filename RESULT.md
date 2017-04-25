## Results:

Solution | Use CSS | Use Inline-Styles | Mount Time | Rerender time
:--- | :--- | :--- | :--- | :---
react | - | - | 17.762399999999978 | 46.32252
styled-jsx | + | + | 36.72880000000005 | 50.39764000000001
react + css | + | + | 32.70679999999989 | 51.00811999999998
aphrodite | + | + | 38.39600000000005 | 54.924819999999976
styled-components v1 + inline-styles | + | + | 72.16700000000006 | 67.06555999999998
radium | - | + | 66.43400000000001 | 68.21498000000005
styletron | + | - | 60.399800000000006 | 72.46209999999999
styled-jss | + | - | 1873.899 | 78.71887999999997
styled-components v2 + inline-styles | + | + | 70.398 | 118.69119999999994
glamorous | + | - | 155.09199999999996 | 199.69756666666666
react-jss | + | - | 133.81019999999998 | 223.08964000000006
styld | + | - | 154.08600000000024 | 228.53435999999996
glamorous + glamour css | + | - | 192.62679999999995 | 267.13405
styled-components v2 decouple-cell | + | - | 832.1668333333333 | 1990.9128
styled-components v2 | + | - | 1137.9301666666668 | 2976.3810000000003
styled-components v1 | + | - | 1236.6946666666665 | 3177.771
styled-components v1 decouple-cell | + | - | 1274.3306666666667 | 3187.484
