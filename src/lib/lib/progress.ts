import rollupProgress from 'rollup-plugin-progress';
import { TPluginProgressOptions } from '../type';

export default (
  config: TPluginProgressOptions
): ReturnType<typeof rollupProgress> => {
  return rollupProgress(config);
};
