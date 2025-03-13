# Stash Plugin Template

A template for creating plugins for Stash using the native plugin API.

## Bundling

This template uses [rollup.js](https://rollupjs.org/) to bundle code. Files are output to the `dist` folder.

It's unlikely that any of the configurations need to be changed for the majority of plugins. Output files are generated with the same name as the repository. The YAML source file is generated separately, with the name, description, version and url all taken from the `package.json` file.

Your plugin settings are written in the `src/components/settings.json`. This is converted to YAML as part of the bundling process.

## Using the Plugin API

The Stash plugin API can be accessed via `window.pluginApi` (see `src/main.tsx` for an example). The API exposes several libraries used by Stash, which are referenced as peer dependencies by this template. They can be imported into your files as normal, but will not be bundled into the plugin in order to reduce output size and avoid conflicts.

### Font Awesome
The free regular and solid Font Awesome libraries are accessible via the plugin API, but `@fortawesome/react-fontawesome` is not. Instead, the `FontAwesomeIcon` component is accessible as `FontAwesomeIcon = window.pluginApi.components.Icon` - the package does not need to be installed.

## Scripts

| Script       | Description                                                           |
| ------------ | --------------------------------------------------------------------- |
| `build`      | Generates a minified production bundle using Webpack.                 |
| `build:yaml` | Generates the YAML source file for the plugin.                        |
| `dev`        | Generates a development bundle using Webpack.                         |
| `start`      | Same as watch.                                                        |
| `watch`      | Generates a development bundle using Webpack and watches for changes. NOTE: The yaml file is not updated by this script. |
