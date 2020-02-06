import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from "rollup-plugin-terser";


module.exports = {
  input: 'index.js',
  output: {
    file: "dist/index.min.js",
    format: "iife"
  },
  plugins: [resolve(), commonjs(), terser()]
}