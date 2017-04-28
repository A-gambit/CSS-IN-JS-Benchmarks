## Results:
*(sorted by rerender time)*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender Time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 57.99 | 43.67
[react + css](https://github.com/facebook/react) | + | + | 100.62 | 55.59
[aphrodite](https://github.com/Khan/aphrodite) | + | + | 103.06 | 60.06
[glam + inline-style](https://github.com/threepointone/glam) | + | + | 112.76 | 67.07
[glam](https://github.com/threepointone/glam) | + | - | 82.88 | 69.9
[styled-jsx](https://github.com/zeit/styled-jsx) | + | + | 114.48 | 88.54
[styled-components v1 + inline-styles](https://github.com/styled-components/styled-components) | + | + | 188.12 | 103.08
[radium](https://github.com/FormidableLabs/radium) | - | + | 171.57 | 122.35
[styled-jss](https://github.com/cssinjs/styled-jss) | + | - | 284.76 | 146.25
[styled-components v2 + inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | NaN | 150.44
[styled-components v2 + plugin - inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 195.07 | 151.99
[styletron](https://github.com/rtsao/styletron) | + | - | 146.99 | 165.45
[react-jss](https://github.com/cssinjs/react-jss) | + | - | 294.95 | 342.1
[styld](https://github.com/lttb/styld) | + | - | 268.46 | 365.9
[glamorous](https://github.com/paypal/glamorous) | + | - | 343.68 | 435.18
[glamorous + glamour css](https://github.com/paypal/glamorous) | + | - | 411.9 | 438.4
[styled-components v2 decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,285.31 | 2,654.65
[styled-components v2 + plugin - decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,237.17 | 2,768.34
[styled-components v2](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,782.45 | 3,820.59
[styled-components v2 + plugin](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,722.85 | 4,045.01
[styled-components v1](https://github.com/styled-components/styled-components) | + | - | 1,788.62 | 4,441.44
[styled-components v1 decouple-cell](https://github.com/styled-components/styled-components) | + | - | 1,828.17 | 4,479.59
