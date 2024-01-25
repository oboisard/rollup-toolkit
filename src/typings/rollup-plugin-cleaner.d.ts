declare module 'rollup-plugin-cleaner' {
  type RollupPluginCleanerOptions = Record<string, any> & {
    targets: Array<string>;
  };

  function rollupPluginCleaner(options: RollupPluginCleanerOptions): void;

  export default rollupPluginCleaner;
}
