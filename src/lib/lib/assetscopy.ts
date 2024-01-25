import { TPluginAssetsCopyOptions } from '../type';
import rollupCopy from 'rollup-plugin-copy';

export default (
  config: TPluginAssetsCopyOptions
): ReturnType<typeof rollupCopy> => {
  const { target = { src: 'src/assets', dest: 'dist/assets' }, ...rest } =
    config;

  return rollupCopy({
    targets: [target],
    hook: undefined,
    verbose: true,
    ...rest,
  });
};
