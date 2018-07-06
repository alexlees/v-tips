import buble from 'rollup-plugin-buble';
import postcss from 'rollup-plugin-postcss'
export default {
  input: 'src/index.js',
  output: {
    name: 'Tips',
    exports: 'named',
  },
  plugins: [
    postcss({
      modules: true,
    }),
    buble(),
  ],
};
