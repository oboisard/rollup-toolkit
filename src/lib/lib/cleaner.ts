import rollupCleaner from 'rollup-plugin-cleaner';
import { TPluginCleanerOptions } from '../type';

export default (
  config: TPluginCleanerOptions
): ReturnType<typeof rollupCleaner> => {
  return rollupCleaner(config);
};
