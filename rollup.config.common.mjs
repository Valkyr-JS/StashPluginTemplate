import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import * as pkg from "./package.json" with { type: "json" };

const pluginID = pkg.default.name;

// Replace require imports with Plugin API library references
const banner = `window.require = function(name) {
    switch (name) {
        case "@apollo/client":
            return window.PluginApi.libraries.Apollo
        case "@fortawesome/free-regular-svg-icons":
            return window.PluginApi.libraries.FontAwesomeRegular
        case "@fortawesome/free-solid-svg-icons":
            return window.PluginApi.libraries.FontAwesomeSolid
        case "react":
            return window.PluginApi.React
        case "react-bootstrap":
            return window.PluginApi.libraries.Bootstrap
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
    del({ targets: "dist" }),
    nodeResolve(),
    peerDepsExternal(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    typescript(),
  ],
};
