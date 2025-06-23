import commonjs from "@rollup/plugin-commonjs";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import * as pkg from "./package.json" with { type: "json" };
import "dotenv/config"

const dest = process.env.STASH_PLUGIN_DEST ?? "dist";

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
        case "mousetrap":
            return window.PluginApi.libraries.Mousetrap
        case "mousetrap-pause":
            return window.PluginApi.libraries.MousetrapPause
        case "react":
            return window.PluginApi.React
        case "react-bootstrap":
            return window.PluginApi.libraries.Bootstrap
        case "react-dom":
            return window.PluginApi.ReactDOM
        case "react-intl":
            return window.PluginApi.libraries.Intl
        case "react-router-dom":
            return window.PluginApi.libraries.ReactRouterDOM
        case "react-select":
            return window.PluginApi.libraries.ReactSelect
    }
}`;

export default {
  input: "src/main.tsx",
  output: {
    banner,
    file: dest + "/" + pluginID + ".js",
    format: "cjs",
  },
  plugins: [
    commonjs(),
    copy({
      targets: [
        { src: "src/source.yml", dest, rename: pluginID + ".yml" },
      ],
    }),
    del({ targets: dest, force: true }),
    nodeResolve(),
    peerDepsExternal(),
    replace({
      preventAssignment: true,
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
    typescript(),
  ],
};
