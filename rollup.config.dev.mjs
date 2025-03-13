import postcss from "rollup-plugin-postcss";
import common from "./rollup.config.common.mjs";
import * as pkg from "./package.json" with { type: "json" };

const pluginID = pkg.default.name;

const devConfig = {
  ...common,
  output: {
    ...common.output,
    sourcemap: "inline",
  },
  plugins: [
    ...common.plugins,
    postcss({ extract: pluginID + ".css", sourceMap: "inline" }),
  ],
};

export default devConfig;
