import rollupScss from 'rollup-plugin-scss';
import postcss from 'postcss';

import postcssImport from 'postcss-import';
import postcssNested from 'postcss-nested';
import postcssUrl from 'postcss-url';

import {
  TPluginSCSSImportOptions,
  TPluginSCSSNestedOptions,
  TPluginSCSSUrlOptions,
  TPluginSCSSOptions,
} from '../type';
import { getStaticCss } from '../helpers';

export const getPostcssImportPlugin = (
  config: TPluginSCSSImportOptions | boolean
): ReturnType<typeof postcssImport> => {
  const autoConfig = typeof config === 'boolean' ? {} : config;
  return (autoConfig && postcssImport(autoConfig)) || undefined;
};

export const getPostcssNestedPlugin = (
  config: TPluginSCSSNestedOptions | boolean
): ReturnType<typeof postcssNested> => {
  const autoConfig = typeof config === 'boolean' ? {} : config;
  return (autoConfig && postcssNested(autoConfig)) || undefined;
};

export const getPostcssUrlPlugin = (
  config: TPluginSCSSUrlOptions | boolean | 'inline'
): ReturnType<typeof postcssUrl> => {
  let autoConfig: TPluginSCSSUrlOptions = {};
  if (typeof config === 'boolean' || config === 'inline') {
    autoConfig = { url: 'inline' };
  } else if (config) {
    autoConfig = config;
  }
  return (autoConfig && postcssUrl(autoConfig)) || undefined;
};

export default (config: TPluginSCSSOptions): ReturnType<typeof rollupScss> => {
  const {
    atimport = true,
    nested = true,
    url = true,
    ...postcssConfig
  } = config;

  const plugins: Array<postcss.AcceptedPlugin> = [];

  if (atimport) {
    plugins.push(getPostcssImportPlugin(atimport));
  }

  if (nested) {
    plugins.push(getPostcssNestedPlugin(nested));
  }

  if (url) {
    plugins.push(getPostcssUrlPlugin(url));
  }

  return rollupScss({
    fileName: 'index.css',
    processor: (css) =>
      postcss(plugins)
        .process(css, { from: undefined })
        .then((result) => getStaticCss(result.css)),
    verbose: true,
    includePaths: ['node_modules/'],
    ...postcssConfig,
  });
};
