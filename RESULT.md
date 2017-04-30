## Results:
*(sorted by rerender time)*

Solution | Use CSS | Use Inline-Styles | Mount Time | Rerender time
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 42.73 | 41.12
[react-css](https://github.com/facebook/react) | + | + | 72.45 | 55.48
[styled-jsx](https://github.com/zeit/styled-jsx) | + | + | 95.82 | 57.44
[glam-inline-style](https://github.com/threepointone/glam) | + | + | 74.69 | 62.93
[aphrodite](https://github.com/Khan/aphrodite) | + | + | 105.95 | 66.09
[glam-simple](https://github.com/threepointone/glam) | + | - | 82.77 | 77.34
[fela](https://github.com/rofrischmann/fela/) | + | - | 120.38 | 86.72
[rockey-inline](https://github.com/tuchk4/rockey) | + | + | 172.8 | 97.54
[styletron](https://github.com/rtsao/styletron) | + | - | 153.57 | 101.87
[styled-components-v1-inline-styles](https://github.com/styled-components/styled-components) | + | + | 180.25 | 103.81
[styled-jss](https://github.com/cssinjs/styled-jss) | + | - | 247.22 | 104.8
[styled-components-v2-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 189.94 | 108.85
[styled-components-v2-plugin-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 197.49 | 109.53
[radium](https://github.com/FormidableLabs/radium) | - | + | 168.16 | 116.99
[styled-jss-w-o-plugins](https://github.com/cssinjs/styled-jss) | + | - | 215.53 | 119.86
[react-jss](https://github.com/cssinjs/react-jss) | + | - | 286.41 | 219.49
[glamorous](https://github.com/paypal/glamorous) | + | - | 332.88 | 324.46
[rockey-speedy](https://github.com/tuchk4/rockey) | + | - | 443.66 | 405.1
[glamorous-glamour-css](https://github.com/paypal/glamorous) | + | - | 433.89 | 482.93
[rockey](https://github.com/tuchk4/rockey) | + | - | 495.66 | 645.81
[styled-components-v2-plugin-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,351.76 | 2,575.95
[styled-components-v2-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,362.22 | 2,648.08
[styled-components-v2-plugin](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,752.82 | 3,835.01
[styled-components-v2](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,758.25 | 3,855.9
[styled-components-v1](https://github.com/styled-components/styled-components) | + | - | 1,997.85 | 4,051.13
[styled-components-v1-decouple-cell](https://github.com/styled-components/styled-components) | + | - | 2,106.05 | 4,760.46
