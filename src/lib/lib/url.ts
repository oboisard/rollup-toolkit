import url from '@rollup/plugin-url';
import { TPluginUrlOptions } from '../type';

export default (config: TPluginUrlOptions): ReturnType<typeof url> => {
  return url({ ...config });
};
