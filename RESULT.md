## Results:
*(sorted by rerender time)*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender Time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 54.66 | 47.66
[react + css](https://github.com/facebook/react) | + | + | 105.83 | 74.29
[glam + inline-style](https://github.com/threepointone/glam) | + | + | 110.72 | 79.93
[aphrodite](https://github.com/Khan/aphrodite) | + | + | 127.63 | 80.41
[glam](https://github.com/threepointone/glam) | + | - | 103.44 | 94.33
[styled-jsx](https://github.com/zeit/styled-jsx) | + | + | 112.11 | 94.75
[styled-components v1 + inline-styles](https://github.com/styled-components/styled-components) | + | + | 212.21 | 150.37
[radium](https://github.com/FormidableLabs/radium) | - | + | 195.62 | 159.16
[styled-components v2 + inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 236.78 | 174.25
[styled-components v2 + plugin - inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 216.86 | 191.9
[styled-jss](https://github.com/cssinjs/styled-jss) | + | - | 347.46 | 194.23
[styletron](https://github.com/rtsao/styletron) | + | - | 186.7 | 210.5
[react-jss](https://github.com/cssinjs/react-jss) | + | - | 346.96 | 363.68
[glamorous](https://github.com/paypal/glamorous) | + | - | 377.5 | 391.78
[styld](https://github.com/lttb/styld) | + | - | 334.37 | 422.42
[glamorous + glamour css](https://github.com/paypal/glamorous) | + | - | 502.04 | 472.7
[styled-components v2 decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,391.7 | 2,653.74
[styled-components v2 + plugin - decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,328.77 | 2,676.81
[styled-components v2 + plugin](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,812.11 | 3,845.43
[styled-components v2](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,698.04 | 3,949.87
[styled-components v1](https://github.com/styled-components/styled-components) | + | - | 1,907.22 | 4,275.37
[styled-components v1 decouple-cell](https://github.com/styled-components/styled-components) | + | - | 1,815.59 | 4,294.2
