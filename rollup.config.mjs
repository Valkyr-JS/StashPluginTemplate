import typescript from "@rollup/plugin-typescript";
import scss from "rollup-plugin-scss";

// ! Change this to the your unique plugin ID. This must match the name given to
// any Javascript or CSS files referenced in `./src/source.yml`.
const pluginID = "YourPluginID";

export default {
  input: "src/main.tsx",
  output: {
    file: "dist/" + pluginID + ".js",
    format: "cjs",
  },
  plugins: [scss({ fileName: pluginID + ".css" }), typescript()],
};
