import copy from "rollup-plugin-copy";
import scss from "rollup-plugin-scss";
import typescript from "@rollup/plugin-typescript";

// ! Change this to the your unique plugin ID. This must match the name given to
// any Javascript or CSS files referenced in `./src/source.yml`.
const pluginID = "YourPluginID";

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
    copy({
      targets: [
        { src: "src/source.yml", dest: "dist", rename: pluginID + ".yml" },
      ],
    }),
    scss({ fileName: pluginID + ".css" }),
    typescript(),
  ],
};
