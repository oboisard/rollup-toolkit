import versionInjector from '../lib/versionInjector';
import progress from '../lib/progress';
import cleaner from '../lib/cleaner';
import cleanup from '../lib/cleanup';
import assetscopy from '../lib/assetscopy';
import commonjs from '../lib/commonjs';
import resolve from '../lib/resolve';
import typescript from '../lib/typescript';
import peerDepsExternal from '../lib/peerDepsExternal';
import babel from '../lib/babel';
import url from '../lib/url';
import scss from '../lib/scss';
import scsscopy from '../lib/scsscopy';
import filesize from '../lib/filesize';
import terser from '../lib/terser';
import copy from '../lib/copy';

import { TCreateEntryConfig, TCustomPluginOptions, TFormat } from '../type';
import {
  DEFAULT_DEST_DIRECTORY,
  DEFAULT_INPUT_FILE,
  DEFAULT_INPUT_FORMATS,
  PREFIX_LOG,
} from '../constants';

const getOutputItem = (
  file: string | ((format: string) => string),
  format: TFormat,
  getPlugins: (format: TFormat) => Array<any> | null
) => {
  return {
    file,
    format,
    assetFileNames: '[name][extname]',
    sourcemap: false,
    plugins: getPlugins(format) ?? [],
  };
};

export const createEntry = (config: TCreateEntryConfig = {}) => {
  const { directory = DEFAULT_DEST_DIRECTORY } = config;

  if (!directory) {
    throw new Error('directory is mandatory');
  }

  if (!directory.endsWith('/')) {
    throw new Error('directory must end with "/"');
  }

  const {
    input = DEFAULT_INPUT_FILE,
    formats = DEFAULT_INPUT_FORMATS,
    external = undefined,
    output = (format) => `${directory}${format}/index.js`,
    outputMinify = (format) => `${directory}${format}/index.min.js`,
    outputMinifyPlugins,
    hasVersionInjector = true,
    hasProgress = true,
    hasCleaner = true,
    hasCleanup = true,
    hasAssetsCopy = true,
    hasCommonjs = true,
    hasResolve = true,
    hasTypescript = true,
    hasPeerDepsExternal = true,
    hasBabel = true,
    hasUrl = true,
    hasScss = true,
    hasFilesize = true,
    hasCopy = true,
    plugins = {},
  } = config;

  if (!input) {
    throw new Error('input is mandatory');
  }

  if (formats.length <= 0) {
    throw new Error('formats is mandatory');
  }

  console.log(`${PREFIX_LOG} create entry for Rollup ::: ${input}.`);

  if (external) {
    const sExternal = external.map((e) => `${e}`).join(', ');
    console.log(`   ** external > ${sExternal}.`);
  }

  const configRollup: TCustomPluginOptions = {
    input,
    output: [],
    plugins: [],
    external,
  };

  formats.forEach((format) => {
    const file = typeof output === 'function' ? output(format) : output;
    const fileMinify =
      typeof outputMinify === 'function' ? outputMinify(format) : output;

    const sMinify = fileMinify ? ' (minify)' : '';
    console.log(`   ** output > ${file} (${format})${sMinify}`);

    configRollup.output.push(
      getOutputItem(file, format, () => {
        const arr: Array<any> = [];

        if (hasVersionInjector) {
          arr.push(versionInjector({ ...plugins.versionInjector }));
        }

        return arr;
      })
    );

    if (fileMinify) {
      configRollup.output.push(
        getOutputItem(fileMinify, format, () => {
          const arr: Array<any> = outputMinifyPlugins ?? [
            terser({ ...plugins.terser }),
          ];

          if (hasVersionInjector) {
            arr.push(versionInjector({ ...plugins.versionInjector }));
          }

          return arr;
        })
      );
    }
  });

  if (hasProgress) {
    console.log(`\t add progress plugin`);
    configRollup.plugins.push(progress({ ...plugins.progress }));
  }

  if (hasCleaner) {
    console.log(`\t add cleaner plugin`);
    configRollup.plugins.push(
      cleaner({ targets: [directory], ...plugins.cleaner })
    );
  }

  if (hasCleanup) {
    console.log(`\t add cleanup plugin`);
    configRollup.plugins.push(cleanup({ ...plugins.cleanup }));
  }

  if (hasCommonjs) {
    console.log(`\t add commonjs plugin`);
    configRollup.plugins.push(commonjs({ ...plugins.commonjs }));
  }

  if (hasResolve) {
    console.log(`\t add resolve plugin`);
    configRollup.plugins.push(resolve({ ...plugins.resolve }));
  }

  if (hasTypescript) {
    console.log(`\t add typescript plugin`);
    configRollup.plugins.push(typescript({ ...plugins.resolve }));
  }

  if (hasPeerDepsExternal) {
    console.log(`\t add peerDepsExternal plugin`);
    configRollup.plugins.push(
      peerDepsExternal({ ...plugins.peerDepsExternal })
    );
  }

  if (hasBabel) {
    console.log(`\t add babel plugin`);
    configRollup.plugins.push(babel({ ...plugins.babel }));
  }

  if (hasAssetsCopy) {
    console.log(`\t add assetscopy plugin`);
    configRollup.plugins.push(assetscopy({ ...plugins.assetscopy }));
  }

  if (hasUrl) {
    console.log(`\t add url plugin`);
    configRollup.plugins.push(url({ ...plugins.url }));
  }

  if (hasScss) {
    console.log(`\t add scss plugin`);
    configRollup.plugins.push(scss({ ...plugins.scss }));
    configRollup.plugins.push(
      scsscopy({
        directory,
        file: plugins.scss?.fileName,
        output: plugins.scss?.fileName,
        ...plugins?.scsscopy,
      })
    );
  }

  if (hasCopy && plugins?.copy) {
    console.log(`\t add copy plugin`);
    configRollup.plugins.push(copy({ ...plugins.copy }));
  }

  if (hasFilesize) {
    console.log(`\t add filesize plugin`);
    configRollup.plugins.push(filesize({ ...plugins.filesize }));
  }

  return configRollup;
};
