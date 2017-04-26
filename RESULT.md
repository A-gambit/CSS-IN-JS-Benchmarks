## Results:

Solution | Use CSS | Use Inline-Styles | Mount Time | Rerender time
:--- | :--- | :--- | :--- | :---
react | - | - | 18.82 | 46.69
react + css | + | + | 29.33 | 50.63
aphrodite | + | + | 38.91 | 51.7
styled-jsx | + | + | 36.89 | 52.91
styled-components v2 + plugin - inline-styles | + | + | 64.04 | 76.55
styled-components v2 + inline-styles | + | + | 72.34 | 66.74
styled-components v1 + inline-styles | + | + | 75.03 | 67.4
radium | - | + | 73.31 | 69.78
styletron | + | - | 68.36 | 81.13
styled-jss | + | - | 2,121.4 | 83.41
glamorous | + | - | 148.22 | 199.74
react-jss | + | - | 138.11 | 218.63
styld | + | - | 161.12 | 236.8
glamorous + glamour css | + | - | 197.46 | 280.44
styled-components v2 decouple-cell | + | - | 786.29 | 1,923.31
styled-components v2 + plugin - decouple-cell | + | - | 909.93 | 2,261.01
styled-components v2 | + | - | 1,175.44 | 3,049.9
styled-components v2 + plugin | + | - | 1,258.25 | 3,211.47
styled-components v1 | + | - | 1,244.31 | 3,231.18
styled-components v1 decouple-cell | + | - | 1,297.8 | 3,300.13
