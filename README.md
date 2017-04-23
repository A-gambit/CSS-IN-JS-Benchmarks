# CSS in JS Benchmarks

## Big Table

![gif](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/img.gif)

Big Table examples, use:
- react + css
- aphrodite
- glamorous
- jss
- radium
- styld (jss)
- styled-components
- styled-jsx
- styletron

Average results of the table which create using react, react with css and inline-styles with radium:

|  Solution     | Time (ms)     |
|:--------------|:--------------|
|  react        | 22,4891       |
|  react + css  | 46,7567       |
|  radium       | 69,4689       |

Average results of table where all styles use css:

|  Solution                           | Time (ms)    |
|:------------------------------------|:-------------|
|  styletron                          |  76,65022    |
|  glamorous                          |  200,1468    |
|  jss                                |  232,3857    |
|  styled (jss)                       |  248,6909    |
|  glamorous + glamour css            |  305,2877    |
|  styled-components v2 decouple-cell |  4234,9811   |
|  styled-components v2               |  6984,3862   |
|  styled-components v1 decouple-cell |  7037,1064   |
|  styled-components v1               |  8856,5926   |

Average results of table where all static styles use css and dynamic styles use inline-styles:

|  Solution                            | Time (ms)     |
|:-------------------------------------|:--------------|
|  styled-jsx                          | 43,0903       |
|  aphrodite                           | 53,5163       |
|  styled-components v1 + inline-style | 73,7878       |
|  styled-components v2 + inline-style | 73,8895       |

All results calculation is [here](https://docs.google.com/spreadsheets/d/1kcl_bZpZ63LQiJNTqCzOAgc5TWe_cHPur_f3GpvtqJI/edit?usp=sharing).

New demos and benchmarks will be soon :)

## Contribution

Here is a little contributing guild:

1. Create an appropriate folder for your CSS in JS new implementation. Use [react](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/tree/a4d3b3244159dacedb3f3b62be1801363f98bc1b/packages/big-table/react) example like boilerplate if you want.
2. Add your solution for [Table.js](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/a4d3b3244159dacedb3f3b62be1801363f98bc1b/packages/big-table/react/client/Table.js#L13-L13) file.
3. Run benchmarks.

The benchmarks are not automatically right now :( 
Your help with automation is appreciated.

So you have run tests in the browser it manually. The example of the test is [here](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/a4d3b3244159dacedb3f3b62be1801363f98bc1b/packages/big-table-test/index.js#L7-L7). You have to run script ten times for five tests. Each test should be in the new window. Example of calculation is [here](https://docs.google.com/spreadsheets/d/1kcl_bZpZ63LQiJNTqCzOAgc5TWe_cHPur_f3GpvtqJI/edit?usp=sharing).

Add your favorite CSS in JS implementation!
Your contributions and suggestions are heartily welcome. =^.^=