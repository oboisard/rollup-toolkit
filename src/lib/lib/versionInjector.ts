import rollupVersionInjector from 'rollup-plugin-version-injector';
import { TPluginVersionInjectorOptions } from '../type';

export default (
  config: TPluginVersionInjectorOptions
): ReturnType<typeof rollupVersionInjector> => {
  return rollupVersionInjector({
    injectInComments: {
      fileRegexp: /\.(js|html|css)$/,
      tag: 'Version: {version} - {date}',
      dateFormat: 'mmmm d, yyyy HH:MM:ss',
    },
    injectInTags: {
      fileRegexp: /\.(js)$/,
      tagId: 'VI',
      dateFormat: 'isoUtcDateTime',
    },
    packageJson: './package.json',
    logLevel: 'warn',
    logger: console,
    ...config,
  });
};
