import rollupPeerDepsExternal from 'rollup-plugin-peer-deps-external';
import { TPluginTypescriptOptions } from '../type';

export default (
  config: TPluginTypescriptOptions
): ReturnType<typeof rollupPeerDepsExternal> => {
  return rollupPeerDepsExternal({
    includeDependencies: true,
    ...config,
  });
};
