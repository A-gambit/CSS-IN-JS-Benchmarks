## Results:

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
react | - | - | 52.89 | 47.77
react + css | + | + | 106.02 | 75.81
aphrodite | + | + | 121.44 | 82.35
styled-jsx | + | + | 119.94 | 92.83
styled-components v1 + inline-styles | + | + | 216.77 | 158.32
radium | - | + | 206.7 | 166.81
styled-components v2 + inline-styles | + | + | 249.33 | 179.11
styled-jss | + | - | 338.81 | 187.26
styled-components v2 + plugin - inline-styles | + | + | 231.73 | 194.96
styletron | + | - | 178.33 | 202.22
react-jss | + | - | 348.42 | 359.02
glamorous | + | - | 370.42 | 393.11
styld | + | - | 347.83 | 399.48
glamorous + glamour css | + | - | 490.85 | 468.59
styled-components v2 decouple-cell | + | - | 1,305.84 | 2,653.75
styled-components v2 + plugin - decouple-cell | + | - | 1,336.33 | 2,701.5
styled-components v2 + plugin | + | - | 1,785.21 | 3,897.1
styled-components v2 | + | - | 1,742.67 | 3,905.59
styled-components v1 | + | - | 1,894.9 | 4,292.97
styled-components v1 decouple-cell | + | - | 1,882.69 | 4,415.42
