## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 17.53 | 36.75
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 27.55 | 45.68
[react-css](https://github.com/facebook/react) | + | + | 34.67 | 48.12
[emotion-extract-static](https://github.com/tkh44/emotion) | + | + | 56.8 | 48.7
[cxs](https://github.com/jxnblk/cxs) | + | + | 35.27 | 48.88
[emotion-css-mode](https://github.com/tkh44/emotion) | + | + | 35.37 | 49.67
[styled-jsx-inline-styles](https://github.com/zeit/styled-jsx) | + | + | 37.3 | 50.39
[aphrodite](https://github.com/Khan/aphrodite) | + | + | 38.75 | 50.72
[glam-inline-style](https://github.com/threepointone/glam) | + | + | 35.18 | 51.38
[glam-simple](https://github.com/threepointone/glam) | + | - | 37.65 | 67.83
[rockey-inline](https://github.com/tuchk4/rockey) | + | + | 88.91 | 70.24
[styled-jss-w-o-plugins](https://github.com/cssinjs/styled-jss) | + | - | 103.36 | 70.91
[fela](https://github.com/rofrischmann/fela/) | + | - | 60.72 | 71.17
[styled-jss](https://github.com/cssinjs/styled-jss) | + | - | 134.21 | 79.36
[styletron](https://github.com/rtsao/styletron) | + | - | 83.97 | 81.56
[radium](https://github.com/FormidableLabs/radium) | - | + | 81.07 | 81.85
[styled-components-v2-plugin-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 103.35 | 81.86
[emotion-simple](https://github.com/threepointone/emotion) | + | - | 141.88 | 114.63
[styled-jsx-dynamic](https://github.com/zeit/styled-jsx) | + | - | 139.62 | 115.1
[rockey-speedy](https://github.com/tuchk4/rockey) | + | - | 94.38 | 158.04
[rockey](https://github.com/tuchk4/rockey) | + | - | 181.01 | 231.76
[glamorous](https://github.com/paypal/glamorous) | + | - | 183.76 | 232.93
[react-jss](https://github.com/cssinjs/react-jss) | + | - | 176.18 | 274
[glamorous-glamour-css](https://github.com/paypal/glamorous) | + | - | 238.89 | 333.68
[styled-components-v2-plugin-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,022.35 | 2,175.22
[styled-components-v2-plugin](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,300.68 | 3,083.52
