import builtins from "rollup-plugin-node-builtins";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";

export default {
  input: "src/main.mjs",
  output: {
    file: "dist/lmn.js",
    format: "umd",
    globals: "lmn",
    name: "lmn"
  },
  plugins: [builtins(), commonjs(), resolve(), uglify()]
};
