import rollupResolve from '@rollup/plugin-node-resolve';
import { TPluginResolveOptions } from '../type';

export default (
  config: TPluginResolveOptions
): ReturnType<typeof rollupResolve> => {
  return rollupResolve({
    preferBuiltins: true,
    exportConditions: ['default', 'module', 'require'],
    ...config,
  });
};
