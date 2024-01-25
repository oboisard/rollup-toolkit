import rollupCopy from 'rollup-plugin-copy';
import { TPluginCopyOptions } from '../type';

export default (config: TPluginCopyOptions): ReturnType<typeof rollupCopy> => {
  return rollupCopy({
    hook: 'writeBundle',
    verbose: true,
    ...config,
  });
};
