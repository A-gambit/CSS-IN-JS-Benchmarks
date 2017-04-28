## Results:

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender Time (ms)
:--- | :--- | :--- | :--- | :---
react | - | - | 48.38 | 39.61
react + css | + | + | 95.21 | 59.12
aphrodite | + | + | 111.47 | 64.14
glam | + | - | 88.4 | 73.84
styled-jsx | + | + | 101.2 | 91.47
radium | - | + | 186.12 | 127
styled-components v1 + inline-styles | + | + | 203.87 | 132.1
styled-components v2 + inline-styles | + | + | 213.29 | 161.88
styled-jss | + | - | 314.33 | 164.77
styletron | + | - | 178.94 | 184.57
styled-components v2 + plugin - inline-styles | + | + | 256.75 | 195
react-jss | + | - | 316.05 | 348.43
glamorous | + | - | 379.44 | 365.05
styld | + | - | 307.5 | 375.34
glamorous + glamour css | + | - | 452.95 | 458.19
styled-components v2 decouple-cell | + | - | 1,304.9 | 2,654.87
styled-components v2 + plugin - decouple-cell | + | - | 1,322.96 | 2,721.7
styled-components v2 | + | - | 1,796.29 | 3,979.18
styled-components v2 + plugin | + | - | 1,762.34 | 4,000.56
styled-components v1 | + | - | 1,803.24 | 4,305.22
styled-components v1 decouple-cell | + | - | 1,844.42 | 4,394.33
