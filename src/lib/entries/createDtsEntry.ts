import { CustomPluginOptions } from 'rollup';
import progress from '../lib/progress';
import dts from '../lib/dts';

import { TCreateDtsEntryConfig } from '../type';
import { DEFAULT_DEST_DIRECTORY, PREFIX_LOG } from '../constants';

export const createDtsEntry = (config: TCreateDtsEntryConfig = {}) => {
  console.log(`${PREFIX_LOG} create dts entry for Rollup.`);

  const { directory = DEFAULT_DEST_DIRECTORY, format = 'esm' } = config;

  if (!directory) {
    throw new Error('directory is mandatory');
  }

  if (!directory.endsWith('/')) {
    throw new Error('directory must end with "/"');
  }

  if (!format) {
    throw new Error('format is mandatory');
  }

  const {
    input = `${directory}${format}/types/index.d.ts`,
    hasProgress = true,
    plugins,
  } = config;

  if (!input) {
    throw new Error('input is mandatory');
  }

  const configRollup: CustomPluginOptions = {
    input,
    output: [{ file: `${directory}index.d.ts`, format }],
    external: [/\.css$/, /\.scss$/],
    plugins: [],
  };

  if (hasProgress) {
    console.log(`\t add progress plugin`);
    configRollup.plugins.push(progress({ ...plugins?.progress }));
  }

  configRollup.plugins.push(dts({ ...plugins?.dts }));

  return configRollup;
};
