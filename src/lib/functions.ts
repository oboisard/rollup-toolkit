import { CustomPluginOptions } from 'rollup';
import { TCreateDtsEntryConfig, TCreateEntryConfig } from './type';
import { createEntry } from './entries/createEntry';
import { createDtsEntry } from './entries/createDtsEntry';

export const createEntries = (
  ...configs: Array<TCreateEntryConfig>
): Array<CustomPluginOptions> => {
  if (configs.length === 0) {
    throw new Error('configs is mandatory');
  }
  return configs.map((config) => createEntry(config));
};

export const createSimplyEntries = (
  ...configs: Array<TCreateEntryConfig>
): Array<CustomPluginOptions> => {
  if (configs.length === 0) {
    throw new Error('configs is mandatory');
  }
  return configs.map((config) =>
    createEntry({ hasScss: false, hasAssetsCopy: false, ...config })
  );
};

export const createDefaultEntries = (
  config: TCreateEntryConfig = {},
  dtsConfig: TCreateDtsEntryConfig = {}
): Array<CustomPluginOptions> => {
  return [createEntry(config), createDtsEntry(dtsConfig)];
};
