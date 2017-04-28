## Results:

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender Time (ms)
:--- | :--- | :--- | :--- | :---
react | - | - | 45.39 | 39.26
react + css | + | + | 111.9 | 60.19
aphrodite | + | + | 134.2 | 64.21
glam | + | - | 89.56 | 70.15
styled-jsx | + | + | 112.48 | 82.23
styled-components v1 + inline-styles | + | + | 193.46 | 120.1
radium | - | + | 167.33 | 124.06
styled-components v2 + inline-styles | + | + | 201.93 | 156.45
styled-jss | + | - | 320.47 | 165.5
styled-components v2 + plugin - inline-styles | + | + | 208.16 | 168.6
styletron | + | - | 166.38 | 169.04
glamorous | + | - | 365.56 | 341.5
react-jss | + | - | 303.96 | 343.78
styld | + | - | 301.72 | 389.82
glamorous + glamour css | + | - | 456.3 | 447.62
styled-components v2 decouple-cell | + | - | 1,326.94 | 2,641.45
styled-components v2 + plugin - decouple-cell | + | - | 1,357.48 | 2,663.41
styled-components v2 | + | - | 1,773.23 | 3,872.42
styled-components v1 decouple-cell | + | - | 1,862.89 | 4,238.1
styled-components v2 + plugin | + | - | 1,869.31 | 4,364.76
styled-components v1 | + | - | 1,835.31 | 4,426.75
