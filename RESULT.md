## Results: *(sorted by rerender time)*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender Time (ms)
:--- | :--- | :--- | :--- | :---
react (without styles) | - | - | 45.39 | 40.01
react + css | + | + | 90.3 | 54.41
aphrodite | + | + | 102.26 | 60.66
glam + inline-style | + | + | 95.96 | 61.36
glam | + | - | 83.18 | 64.87
styled-jsx | + | + | 93.5 | 78.37
styled-components v1 + inline-styles | + | + | 185.8 | 106.81
radium | - | + | 164.64 | 122.4
styled-jss | + | - | 288.72 | 142.18
styled-components v2 + inline-styles | + | + | 190.71 | 146.24
styled-components v2 + plugin - inline-styles | + | + | 193.89 | 150.63
styletron | + | - | 187.25 | 155.68
glamorous | + | - | 338.23 | 332.67
react-jss | + | - | 289.65 | 344.78
styld | + | - | 261.26 | 396.97
glamorous + glamour css | + | - | 432.33 | 426.37
styled-components v2 decouple-cell | + | - | 1,262.21 | 2,546.19
styled-components v2 + plugin - decouple-cell | + | - | 1,262.87 | 2,598.67
styled-components v2 | + | - | 1,713.27 | 3,712.35
styled-components v2 + plugin | + | - | 1,749.03 | 3,867.23
styled-components v1 | + | - | 1,740.16 | 4,212
styled-components v1 decouple-cell | + | - | 1,796.09 | 4,278.34
