import rollupCleanup from 'rollup-plugin-cleanup';
import { TPluginCleanupOptions } from '../type';

export default (
  config: TPluginCleanupOptions
): ReturnType<typeof rollupCleanup> => {
  return rollupCleanup({
    comments: /^[/*]\s?((?!TODO|TASK|WARNING|IGNORE).)*$/i,
    sourcemap: false,
    extensions: ['js', 'jsx', 'ts', 'tsx'],
    maxEmptyLines: -1,
    compactComments: false,
    ...config,
  });
};
