## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 16.49 | 35.65
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 27.73 | 44.48
[react-css](https://github.com/facebook/react) | + | + | 33.72 | 47.34
[cxs](https://github.com/jxnblk/cxs) | + | + | 33.9 | 48.22
[emotion-css-mode](https://github.com/tkh44/emotion) | + | + | 34.12 | 48.35
[emotion-extract-static](https://github.com/tkh44/emotion) | + | + | 56.03 | 48.48
[styled-jsx](https://github.com/zeit/styled-jsx) | + | + | 41 | 49.76
[glam-inline-style](https://github.com/threepointone/glam) | + | + | 33.38 | 50.12
[aphrodite](https://github.com/Khan/aphrodite) | + | + | 39.31 | 51.04
[glam-simple](https://github.com/threepointone/glam) | + | - | 36.37 | 67.09
[rockey-inline](https://github.com/tuchk4/rockey) | + | + | 87.68 | 68.64
[styled-jss-w-o-plugins](https://github.com/cssinjs/styled-jss) | + | - | 98.27 | 69.23
[fela](https://github.com/rofrischmann/fela/) | + | - | 60.4 | 71.57
[styled-jss](https://github.com/cssinjs/styled-jss) | + | - | 129.46 | 78.67
[styled-components-v2-plugin-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 106.97 | 79.77
[radium](https://github.com/FormidableLabs/radium) | - | + | 79.45 | 80.32
[styletron](https://github.com/rtsao/styletron) | + | - | 81.53 | 81.36
[emotion-simple](https://github.com/threepointone/emotion) | + | - | 137.56 | 110.14
[rockey-speedy](https://github.com/tuchk4/rockey) | + | - | 91.93 | 155.74
[rockey](https://github.com/tuchk4/rockey) | + | - | 176.03 | 222.44
[glamorous](https://github.com/paypal/glamorous) | + | - | 180.62 | 230.92
[react-jss](https://github.com/cssinjs/react-jss) | + | - | 166.94 | 266.43
[glamorous-glamour-css](https://github.com/paypal/glamorous) | + | - | 224.04 | 319.38
[styled-components-v2-plugin-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,004.84 | 2,126.62
[styled-components-v2-plugin](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,277.21 | 2,941.09
