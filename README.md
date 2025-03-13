# Stash Plugin Template

A template for creating plugins for Stash using the native plugin API.

## Bundling

This template uses [rollup.js](https://rollupjs.org/) to bundle code. Files are output to the `dist` folder.

It's unlikely that any of the configurations need to be changed for the majority of plugins. Output files are generated with the same name as the repository. The YAML source file is generated separately, with the name, description, version and url all taken from the `package.json` file.

Your plugin settings are written in the `src/components/settings.json`. This is converted to YAML as part of the bundling process.

## Scripts

| Script       | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| `build`      | Generates a minified production bundle using Webpack.                 |
| `build:yaml` | Generates the YAML source file for the plugin.                        |
| `dev`        | Generates a development bundle using Webpack.                         |
| `start`      | Same as watch.                                                        |
| `watch`      | Generates a development bundle using Webpack and watches for changes. NOTE: The yaml file is not updated by this script. |
