declare module 'postcss-assets' {
  function postcssAssets(
    params: {
      loadPaths?: Array<string>;
      cachebuster?: boolean;
    } = {}
  ): postcss.Transformer;

  export default postcssAssets;
}
