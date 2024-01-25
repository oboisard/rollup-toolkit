import rollupCommonjs from '@rollup/plugin-commonjs';
import { TPluginCommonjsOptions } from '../type';

export default (
  config: TPluginCommonjsOptions
): ReturnType<typeof rollupCommonjs> => {
  return rollupCommonjs({
    include: ['src/**/*.ts', 'node_modules/**'],
    ...config,
  });
};
