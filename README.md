# Stash Plugin Template

A template for creating plugins for Stash using the native plugin API.

## First steps

1. Run `npm install` to install dependencies.
2. Update `./src/source.yml` with your plugin details.
3. Update the `pluginID` in `webpack.common.js`.

## Scripts

| Script  | Description                                                           |
| ------- | --------------------------------------------------------------------- |
| `build` | Generates a minified production bundle using Webpack.                 |
| `dev`   | Generates a development bundle using Webpack.                         |
| `start` | Same as watch.                                                        |
| `watch` | Generates a development bundle using Webpack and watches for changes. |
