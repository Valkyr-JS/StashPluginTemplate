import postcss from "rollup-plugin-postcss";
import terser from '@rollup/plugin-terser';
import common from "./rollup.config.common.mjs";
import * as pkg from "./package.json" with { type: "json" };

const pluginID = pkg.default.name;

const prodConfig = {
  ...common,
  plugins: [
    ...common.plugins,
    postcss({ extract: pluginID + ".css", minimize: true, sourceMap: false }),
    terser()
  ],
};

export default prodConfig;
