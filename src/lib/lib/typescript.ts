import rollupTypescript from '@rollup/plugin-typescript';
import { TPluginTypescriptOptions } from '../type';

export default (
  config: TPluginTypescriptOptions
): ReturnType<typeof rollupTypescript> => {
  return rollupTypescript({
    sourceMap: false,
    inlineSources: false,
    declaration: true,
    tsconfig: './tsconfig.json',
    exclude: ['**/test', '**/*.test.ts'],
    ...config,
  });
};
