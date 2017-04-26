## Results:

Solution | Use CSS | Use Inline-Styles | Mount Time | Rerender time
:--- | :--- | :--- | :--- | :---
react | - | - | 19.27 | 48.56
react + css | + | + | 29.22 | 49.24
styled-jsx | + | + | 34.01 | 50.5
aphrodite | + | + | 38.89 | 55.56
styled-components v1 + inline-styles | + | + | 72.04 | 66.97
styled-components v2 + plugin - inline-styles | + | + | 70.99 | 69.6
styled-components v2 + inline-styles | + | + | 75.78 | 70.23
radium | - | + | 69.35 | 71.81
styletron | + | - | 68.34 | 75.14
styled-jss | + | - | 114.72 | 75.61
glamorous | + | - | 151.5 | 197.15
react-jss | + | - | 127.41 | 203.43
styld | + | - | 155.63 | 235.38
glamorous + glamour css | + | - | 210.38 | 282.69
styled-components v2 + plugin - decouple-cell | + | - | 856.06 | 2,046.6
styled-components v2 decouple-cell | + | - | 840.18 | 2,075.73
styled-components v2 + plugin | + | - | 1,170.89 | 3,067.64
styled-components v2 | + | - | 1,190.37 | 3,181.42
styled-components v1 decouple-cell | + | - | 1,328.33 | 3,233.94
styled-components v1 | + | - | 1,349.81 | 3,405.94
