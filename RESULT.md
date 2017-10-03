## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 16.22 | 34.71
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 27.23 | 43.59
[cxs](https://github.com/jxnblk/cxs) | + | + | 33.34 | 47
[react-css](https://github.com/facebook/react) | + | + | 33.12 | 47.14
[emotion-extract-static](https://github.com/tkh44/emotion) | + | + | 54.73 | 47.3
[emotion-css-mode](https://github.com/tkh44/emotion) | + | + | 34.37 | 47.45
[styled-jsx](https://github.com/zeit/styled-jsx) | + | + | 41.97 | 48.51
[glam-inline-style](https://github.com/threepointone/glam) | + | + | 34.06 | 49.67
[aphrodite](https://github.com/Khan/aphrodite) | + | + | 38.67 | 50.04
[styled-jss-w-o-plugins](https://github.com/cssinjs/styled-jss) | + | - | 95.45 | 64.58
[glam-simple](https://github.com/threepointone/glam) | + | - | 36.89 | 66
[rockey-inline](https://github.com/tuchk4/rockey) | + | + | 88.01 | 66.78
[fela](https://github.com/rofrischmann/fela/) | + | - | 58.98 | 71.12
[styled-jss](https://github.com/cssinjs/styled-jss) | + | - | 132.68 | 76.96
[radium](https://github.com/FormidableLabs/radium) | - | + | 78.93 | 78.18
[styled-components-v2-plugin-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 113.41 | 79.35
[styletron](https://github.com/rtsao/styletron) | + | - | 81.67 | 81.11
[emotion-simple](https://github.com/threepointone/emotion) | + | - | 133.5 | 106.86
[rockey-speedy](https://github.com/tuchk4/rockey) | + | - | 90.55 | 150.74
[rockey](https://github.com/tuchk4/rockey) | + | - | 172.54 | 217.59
[glamorous](https://github.com/paypal/glamorous) | + | - | 173.45 | 228.57
[react-jss](https://github.com/cssinjs/react-jss) | + | - | 165.08 | 261.22
[glamorous-glamour-css](https://github.com/paypal/glamorous) | + | - | 225.13 | 319.53
[styled-components-v2-plugin-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 996.42 | 2,090.9
[styled-components-v2-plugin](https://github.com/styled-components/styled-components/tree/v2) | + | - | 1,256.94 | 2,944.26
