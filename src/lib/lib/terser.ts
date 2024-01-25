import rollupTerser from '@rollup/plugin-terser';
import { TPluginTerserOptions } from '../type';

export default (
  config: TPluginTerserOptions
): ReturnType<typeof rollupTerser> => {
  return rollupTerser({
    ...config,
  });
};
