import rollupDts from 'rollup-plugin-dts';
import { TPluginDtsOptions } from '../type';

export default (config: TPluginDtsOptions): ReturnType<typeof rollupDts> => {
  return rollupDts({ ...config });
};
