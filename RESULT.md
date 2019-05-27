## Results:
*sorted by rerender time*

Solution | Use CSS | Use Inline-Styles | Mount Time (ms) | Rerender time (ms)
:--- | :--- | :--- | :--- | :---
[react (without styles)](https://github.com/facebook/react) | - | - | 18.25 | 45.01
[nano-css (using put() interface)](https://github.com/streamich/nano-css/blob/master/docs/put.md) | + | + | 29.6 | 51.15
[react (with inline-styles)](https://github.com/facebook/react) | - | + | 30.5 | 51.42
[nano-css (using rule() interface)](https://github.com/streamich/nano-css/blob/master/docs/rule.md) | + | + | 31.25 | 53.49
[cxs](https://github.com/jxnblk/cxs) | + | + | 34.9 | 54.84
[styled-jsx-inline-styles](https://github.com/zeit/styled-jsx) | + | + | 37.25 | 55.42
[nano-css (using jsx() interface)](https://github.com/streamich/nano-css/blob/master/docs/jsx.md) | + | + | 42.87 | 55.93
[emotion-css-mode](https://github.com/emotion-js/emotion) | + | + | 34.43 | 56.05
[react-css](https://github.com/facebook/react) | + | + | 35.48 | 58.44
[aphrodite](https://github.com/Khan/aphrodite) | + | + | 42.7 | 59.3
[nano-css (using styled() interface)](https://github.com/streamich/nano-css/blob/master/docs/styled.md) | + | + | 44 | 59.79
[nano-css (using drule() interface)](https://github.com/streamich/nano-css/blob/master/docs/drule.md) | + | - | 35.6 | 62.18
[glam-inline-style](https://github.com/threepointone/glam) | + | + | 34.6 | 62.88
[nano-css (using dsheet() interface)](https://github.com/streamich/nano-css/blob/master/docs/dsheet.md) | + | + | 37.7 | 64.43
[styled-jss-w-o-plugins-v2](https://github.com/cssinjs/styled-jss) | + | - | 105.05 | 70.02
[styled-jss-w-o-plugins](https://github.com/cssinjs/styled-jss) | + | - | 100.23 | 71.64
[styled-components-inline-styles](https://github.com/styled-components/styled-components/tree/v2) | + | + | 78.4 | 71.82
[rockey-inline](https://github.com/tuchk4/rockey) | + | + | 81.7 | 73.16
[nano-css (using styled() interface CSS-only)](https://github.com/streamich/nano-css/blob/master/docs/styled.md) | + | - | 65.9 | 74.23
[glam-simple](https://github.com/threepointone/glam) | + | - | 41.33 | 74.63
[styled-jss-v2](https://github.com/cssinjs/styled-jss) | + | - | 135.57 | 78.05
[styled-jss](https://github.com/cssinjs/styled-jss) | + | - | 134.45 | 79.81
[fela](https://github.com/rofrischmann/fela/) | + | - | 55.3 | 81.53
[nano-css (using sheet() interface)](https://github.com/streamich/nano-css/blob/master/docs/sheet.md) | + | + | 32.7 | 82.43
[emotion-simple](https://github.com/emotion-js/emotion) | + | - | 108.75 | 84.71
[emotion-extract-static](https://github.com/emotion-js/emotion) | + | + | 120.85 | 84.82
[emotion-decouple](https://github.com/emotion-js/emotion) | + | - | 107.45 | 85.83
[radium](https://github.com/FormidableLabs/radium) | - | + | 80.8 | 89.52
[styletron](https://github.com/rtsao/styletron) | + | - | 86.43 | 92.42
[merge-styles](https://github.com/OfficeDev/office-ui-fabric-react/packages/merge-styles) | + | - | 85.08 | 96.36
[styled-components](https://github.com/styled-components/styled-components/tree/v2) | + | - | 146.8 | 96.71
[styled-components-decouple-cell](https://github.com/styled-components/styled-components/tree/v2) | + | - | 187.1 | 109.68
[styled-jsx-dynamic](https://github.com/zeit/styled-jsx) | + | - | 149.23 | 115.61
[react-native-web](https://github.com/necolas/react-native-web) | + | + | 167.75 | 122.86
[rockey-speedy](https://github.com/tuchk4/rockey) | + | - | 90.8 | 155.07
[rockey](https://github.com/tuchk4/rockey) | + | - | 171.6 | 218.18
[react-jss](https://github.com/cssinjs/react-jss) | + | - | 161.8 | 256.31
[glamorous](https://github.com/paypal/glamorous) | + | - | 217.15 | 273.26
[glamorous-glamour-css](https://github.com/paypal/glamorous) | + | - | 221.8 | 366.03
