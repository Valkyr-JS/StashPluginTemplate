import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import replace from "@rollup/plugin-replace";
import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";

// ! Change this to the your unique plugin ID. This must match the name given to
// any Javascript or CSS files referenced in `./src/source.yml`.
const pluginID = "YourPluginID";

// Replace require imports with Plugin API library references
const banner = `window.require = function(name) {
    switch (name) {
        case "react":
            return window.PluginApi.React
        case "react-dom":
            return window.PluginApi.ReactDOM
    }
}`;

export default {
  input: "src/main.tsx",
  output: {
    banner,
    file: "dist/" + pluginID + ".js",
    format: "cjs",
  },
  plugins: [
    commonjs(),
    copy({
      targets: [
        { src: "src/source.yml", dest: "dist", rename: pluginID + ".yml" },
      ],
    }),
    nodeResolve(),
    peerDepsExternal(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    scss({ fileName: pluginID + ".css" }),
    typescript(),
  ],
};
