import rollupFilsize from 'rollup-plugin-filesize';
import { TPluginFilesizeOptions } from '../type';

export default (
  config: TPluginFilesizeOptions
): ReturnType<typeof rollupFilsize> => {
  return rollupFilsize({ ...config });
};
