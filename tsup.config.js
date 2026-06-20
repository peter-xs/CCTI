import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    'ccti-ink': './bin/ccti-ink.js',
  },
  format: ['esm'],
  platform: 'node',
  target: 'node18',
  clean: true,
  minify: false,
  sourcemap: false,
  dts: false,
  esbuildOptions(options) {
    options.loader = {
      '.js': 'jsx',
      '.jsx': 'jsx',
    };
  },
  outDir: 'dist',
});
