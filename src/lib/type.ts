import { CustomPluginOptions } from 'rollup';
import { Options as TerserOptions } from '@rollup/plugin-terser';
import { PluginProgressOptions } from 'rollup-plugin-progress';
import pluginCleaner from 'rollup-plugin-cleaner';
import { RollupCommonJSOptions } from '@rollup/plugin-commonjs';
import { Options as CleanupOptions } from 'rollup-plugin-cleanup';
import { RollupNodeResolveOptions } from '@rollup/plugin-node-resolve';
import { RollupTypescriptOptions } from '@rollup/plugin-typescript';
import { PluginPeerDepsExternalOptions } from 'rollup-plugin-peer-deps-external';
import pluginBabel from '@rollup/plugin-babel';
import pluginFilesize from 'rollup-plugin-filesize';
import { Options as PluginDtsOptions } from 'rollup-plugin-dts';
import { CSSPluginOptions } from 'rollup-plugin-scss';
import { AtImportOptions } from 'postcss-import';
import { Options as PostcssNestedOptions } from 'postcss-nested';
import { Options as PostcssUrlOptions } from 'postcss-url';
import pluginUrl from '@rollup/plugin-url';
import pluginVI from 'rollup-plugin-version-injector';

import { CopyOptions, Target as CopyTarget } from 'rollup-plugin-copy';
export type TFormat = 'iife' | 'cjs' | 'esm';

//  ********************************************   types of plugins
export type TPluginUrlOptions = Parameters<typeof pluginUrl>[0];
export type TPluginAssetsCopyOptions = Omit<CopyOptions, 'targets'> & {
  target?: CopyTarget;
};
export type TPluginTerserOptions = TerserOptions;
export type TPluginProgressOptions = PluginProgressOptions;
export type TPluginCleanerOptions = Parameters<typeof pluginCleaner>[0];
export type TPluginCleanupOptions = CleanupOptions;
export type TPluginCommonjsOptions = RollupCommonJSOptions;
export type TPluginResolveOptions = RollupNodeResolveOptions;
export type TPluginPeerDepsExternalOptions = PluginPeerDepsExternalOptions;
export type TPluginBabelOptions = Parameters<typeof pluginBabel>[0];
export type TPluginTypescriptOptions = RollupTypescriptOptions;
export type TPluginFilesizeOptions = Parameters<typeof pluginFilesize>[0];
export type TPluginDtsOptions = PluginDtsOptions;
export type TPluginVersionInjectorOptions = Parameters<typeof pluginVI>[0];
export type TPluginCopyOptions = CopyOptions;

//  ********************************************   types of scss plugins
export type TPluginSCSSImportOptions = AtImportOptions;
export type TPluginSCSSNestedOptions = PostcssNestedOptions;
export type TPluginSCSSUrlOptions = PostcssUrlOptions;

export type TPluginSCSSOptions = CSSPluginOptions & {
  atimport?: boolean | null | TPluginSCSSImportOptions;
  nested?: boolean | null | TPluginSCSSNestedOptions;
  url?: boolean | null | 'inline' | TPluginSCSSUrlOptions;
};
export type TPluginSCSSCopyOptions = CopyOptions & {
  directory?: string;
  dest?: string;
  format?: TFormat;
  file?: string;
  output?: string;
  outputMinify?: string;
};

//  ********************************************   types of entries
export type TCustomPluginOptions = CustomPluginOptions & {
  input: string;
  output: Array<any>;
  plugins: Array<any>;
  external?: Array<string | RegExp>;
};

export type TCreateDtsEntryConfig = {
  input?: string;
  directory?: string;
  format?: TFormat;
  hasProgress?: boolean;
  plugins?: {
    progress?: TPluginProgressOptions;
    dts?: TPluginDtsOptions;
  };
};

export type TCreateEntryConfig = {
  input?: string;
  directory?: string;
  external?: Array<string | RegExp>;
  output?: string | ((format: string) => string);
  outputMinify?: string | ((format: string) => string);
  outputMinifyPlugins?: Array<any>;
  formats?: Array<TFormat>;
  hasVersionInjector?: boolean;
  hasProgress?: boolean;
  hasCleaner?: boolean;
  hasCleanup?: boolean;
  hasAssetsCopy?: boolean;
  hasCommonjs?: boolean;
  hasResolve?: boolean;
  hasTypescript?: boolean;
  hasPeerDepsExternal?: boolean;
  hasBabel?: boolean;
  hasUrl?: boolean;
  hasScss?: boolean;
  hasFilesize?: boolean;
  hasCopy?: boolean;
  plugins?: {
    versionInjector?: TPluginVersionInjectorOptions;
    terser?: TPluginTerserOptions;
    progress?: TPluginProgressOptions;
    cleaner?: TPluginCleanerOptions;
    cleanup?: TPluginCleanupOptions;
    assetscopy?: TPluginAssetsCopyOptions;
    commonjs?: TPluginCommonjsOptions;
    resolve?: TPluginResolveOptions;
    peerDepsExternal?: TPluginPeerDepsExternalOptions;
    babel?: TPluginBabelOptions;
    typescript?: TPluginTypescriptOptions;
    url?: TPluginUrlOptions;
    scss?: TPluginSCSSOptions;
    scsscopy?: TPluginSCSSCopyOptions;
    filesize?: TPluginFilesizeOptions;
    copy?: TPluginCopyOptions;
  };
};
