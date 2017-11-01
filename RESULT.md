## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 17.75 | 37.6
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 31.26 | 48.05
[react-css](https://github.com/facebook/react) | + | + | 37.83 | 52.72
[emotion-css-mode](https://github.com/tkh44/emotion) | + | + | 39.83 | 53.62
[emotion-extract-static](https://github.com/tkh44/emotion) | + | + | 64.5 | 54.11
[styled-jsx-inline-styles](https://github.com/zeit/styled-jsx) | + | + | 41 | 54.13
[cxs](https://github.com/jxnblk/cxs) | + | + | 40.53 | 55.02
[aphrodite](https://github.com/Khan/aphrodite) | + | + | 42.94 | 55.72
[glam-inline-style](https://github.com/threepointone/glam) | + | + | 38.59 | 56.44
[glam-simple](https://github.com/threepointone/glam) | + | - | 42.72 | 72.79
[styled-components-v2-plugin-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 101.49 | 74.74
[styled-jss-w-o-plugins](https://github.com/cssinjs/styled-jss) | + | - | 109.69 | 76.05
[rockey-inline](https://github.com/tuchk4/rockey) | + | + | 96.44 | 78.46
[fela](https://github.com/rofrischmann/fela/) | + | - | 66.72 | 79.02
[styletron](https://github.com/rtsao/styletron) | + | - | 91.24 | 88.59
[styled-jss](https://github.com/cssinjs/styled-jss) | + | - | 147.92 | 89.1
[radium](https://github.com/FormidableLabs/radium) | - | + | 90.09 | 89.48
[styled-jsx-dynamic](https://github.com/zeit/styled-jsx) | + | - | 156.01 | 130.46
[emotion-simple](https://github.com/threepointone/emotion) | + | - | 156.92 | 130.78
[rockey-speedy](https://github.com/tuchk4/rockey) | + | - | 104.48 | 170.59
[rockey](https://github.com/tuchk4/rockey) | + | - | 203.28 | 254.71
[glamorous](https://github.com/paypal/glamorous) | + | - | 198.34 | 259.29
[react-jss](https://github.com/cssinjs/react-jss) | + | - | 197.09 | 287.73
[glamorous-glamour-css](https://github.com/paypal/glamorous) | + | - | 261.78 | 361.61
[styled-components-v2-plugin-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,036 | 2,228.45
[styled-components-v2-plugin](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,346.39 | 3,023.55
