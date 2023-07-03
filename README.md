[![npm][npm]][npm-url]
[![node][node]][node-url]
[![tests][tests]][tests-url]
[![size][size]][size-url]

# lezer-webpack-loader

Webpack loader for [Lezer](https://lezer.codemirror.net/docs/) grammar files.

## Getting started

To begin, you'll need to install `lezer-webpack-loader`:

```bash
npm install --save-dev lezer-webpack-loader
```

Then add the plugin to your webpack config. For example:

**file.js**

```js
import { parser } from "example.grammar";
```

**webpack.config.js**

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.grammar/i,
        use: "lezer-webpack-plugin",
      },
    ],
  },
};
```

And run `webpack` via your preferred method.

This way you can import the parser and the tokens directly from the grammar file.

## Options

- [**`warn`**](#warn)
- [**`includeNames`**](#includeNames)
- [**`moduleStyle`**](#moduleStyle)
- [**`exportName`**](#exportName)
- [**`externalTokenizer`**](#externalTokenizer)
- [**`externalPropSource`**](#externalPropSource)
- [**`externalSpecializer`**](#externalSpecializer)
- [**`externalProp`**](#externalProp)
- [**`contextTracker`**](#contextTracker)

### `warn`

Type:

```ts
type warn = (message: string) => void;
```

Default: `console.warn`

A function that should be called with warnings.

### `includeNames`

Type:

```ts
type includeNames = boolean;
```

Default: `false`

Whether to include term names in the output file.

### `moduleStyle`

Type:

```ts
type moduleStyle = string;
```

Default: `"es"`

Determines the module system used by the output file.
Can be either "cjs" (CommonJS) or "es" (ES2015 module).

### `exportName`

Type:

```ts
type exportName = string;
```

Default: `"parser"`

The name of the export that holds the parser in the output file.

### `externalTokenizer`

Type:

```ts
import { ExternalTokenizer } from "@lezer/lr";

type externalTokenizer = (
  name: string,
  terms: Object<number>
) => ExternalTokenizer;
```

Default: `undefined`

When calling `buildParser`, this can be used to provide placeholders for external tokenizers.

### `externalPropSource`

Type:

```ts
import { NodePropSource } from "@lezer/common";

type externalPropSource = (name: string) => NodePropSource;
```

Default: `undefined`

Used by `buildParser` to resolve external prop sources.

### `externalSpecializer`

Type:

```ts
import { Stack } from "@lezer/lr";

type externalPropSource = (
  name: string,
  terms: Object<number>
) => (value: string, stack: Stack) => number;
```

Default: `undefined`

Provide placeholders for external specializers when using `buildParser`.

### `externalProp`

Type:

```ts
import { NodeProp } from "@lezer/common";

type externalProp = (name: string) => NodeProp<any>;
```

Default: `undefined`

If given, will be used to initialize external props in the parser returned by `buildParser`.

### `contextTracker`

Type:

```ts
import { ContextTracker } from "@lezer/lr";

type contextTracker = ContextTracker<any>;
```

Default: `undefined`

If given, will be used as context tracker in a parser built with `buildParser`.

## License

This project is licensed under the GPLv3 License - see the [LICENSE](LICENSE) file for details.

[npm]: https://img.shields.io/npm/v/lezer-webpack-loader.svg
[npm-url]: https://npmjs.com/package/lezer-webpack-loader
[node]: https://img.shields.io/node/v/lezer-webpack-loader.svg
[node-url]: https://nodejs.org
[tests]: https://github.com/joaobrlt/lezer-webpack-loader/workflows/lezer-webpack-loader/badge.svg
[tests-url]: https://github.com/joaobrlt/lezer-webpack-loader/actions
[size]: https://packagephobia.now.sh/badge?p=lezer-webpack-loader
[size-url]: https://packagephobia.now.sh/result?p=lezer-webpack-loader
