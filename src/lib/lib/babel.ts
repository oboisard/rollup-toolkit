import rollupBabel from '@rollup/plugin-babel';
import { TPluginTypescriptOptions } from '../type';

export default (
  config: TPluginTypescriptOptions
): ReturnType<typeof rollupBabel> => {
  return rollupBabel({
    babelHelpers: 'runtime',
    exclude: ['node_modules/**'],
    ...config,
  });
};
