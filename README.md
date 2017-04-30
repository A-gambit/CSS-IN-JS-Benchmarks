# CSS in JS Benchmarks

## Big Table

![gif](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/img.gif)

Big Table examples, use:
- react + css
- aphrodite
- glamorous
- glam
- fela
- react-jss
- radium
- rockey
- styled-components
- styled-jsx
- styletron
- etc

Average results are [here](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/RESULT.md).

New demos and benchmarks will be soon :)

## Contribution

Here is a little contributing guild:

- Use `node` version `7.9+`
- Install `lerna` and `yarn` (optional)
- `lerna bootstrap` or `lerna bootstrap --npm-client=yarn` - install deps in packages
- `npm i`
- `lerna run build` - make builds for all packages

1. Create an appropriate folder for your CSS in JS new implementation. Use [react](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/tree/master/packages/big-table/react) as example of boilerplate.
2. Add description for your CSS in JS in package.json. [Example](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/packages/big-table/aphrodite/package.json#L33-L37)
3. Add your solution for [Table.js](https://github.com/A-gambit/CSS-IN-JS-Benchmarks/blob/master/packages/big-table/react/client/Table.js) file.
4. Run benchmarks: `npm run benchmark`. To tun tests for specific packageor - `npm run benchmark -- rockey styled-jss radium`


Add your favorite CSS in JS implementation!
Your contributions and suggestions are heartily welcome. =^.^=
