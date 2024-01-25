import progress from 'rollup-plugin-progress';
import cleaner from 'rollup-plugin-cleaner';
import cleanup from 'rollup-plugin-cleanup';
import versionInjector from 'rollup-plugin-version-injector';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import typescript from '@rollup/plugin-typescript';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export const PREFIX_LOG = '🍓 [Baleen][Front][distribution]';

const DEST_DIRECTORY = 'dist/';
const formats = ['cjs', 'esm'];

const VIOptions = {
  injectInComments: {
    fileRegexp: /\.(js|html|css)$/,
    tag: 'Version: {version} - {date}',
    dateFormat: 'mmmm d, yyyy HH:MM:ss',
  },
  injectInTags: {
    fileRegexp: /\.(js)$/,
    tagId: 'VI',
    dateFormat: 'isoUtcDateTime',
  },
  packageJson: './package.json',
  logLevel: 'warn',
  logger: console,
};

/**
 * @type {Array<any>}
 */
const output = [];
formats.forEach((format) => {
  output.push({
    file: `${DEST_DIRECTORY}${format}/index.js`,
    format,
    assetFileNames: '[name][extname]',
    sourcemap: false,
    plugins:
      format === 'iife'
        ? [nodePolyfills(), versionInjector(VIOptions)]
        : [versionInjector(VIOptions)],
  });
  output.push({
    file: `${DEST_DIRECTORY}${format}/index.min.js`,
    format,
    assetFileNames: '[name][extname]',
    sourcemap: false,
    compact: true,
    plugins:
      format === 'iife'
        ? [nodePolyfills(), terser(), versionInjector(VIOptions)]
        : [terser(), versionInjector(VIOptions)],
  });
});

/**
 * @type {Array<import('rollup').CustomPluginOptions>}
 */
export default [
  {
    input: 'src/index.ts',
    output,
    plugins: [
      progress(),
      cleaner({ targets: [`${DEST_DIRECTORY}/`] }),
      cleanup({
        comments: /^[/*]\s?((?!TODO|TASK|WARNING|IGNORE).)*$/i,
        sourcemap: false,
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        maxEmptyLines: -1,
        compactComments: false,
      }),
      commonjs({
        include: ['src/**/*.ts', 'node_modules/**'],
      }),
      resolve({
        preferBuiltins: true,
        exportConditions: ['default', 'module', 'require'],
      }),
      typescript({
        declaration: true,
        tsconfig: './tsconfig.json',
      }),
      peerDepsExternal({
        includeDependencies: true,
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: ['node_modules/**'],
      }),
    ],
  },
  {
    input: `${DEST_DIRECTORY}esm/types/index.d.ts`,
    output: [{ file: `${DEST_DIRECTORY}index.d.ts`, format: 'esm' }],
    external: [/\.css$/, /\.scss$/],
    plugins: [progress(), dts()],
  },
];

console.log(`${PREFIX_LOG} Génération de la lib.`);
