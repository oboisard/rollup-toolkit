declare module 'rollup-copy-transform-css' {
  type TCreateTransform = {
    minify?: boolean;
    inline?: boolean;
    plugins?: Array<any>;
    map?: any;
    filter?: any;
  };

  function createTransform(args?: TCreateTransform): (
    contents: any,
    filename: any,
    {
      map,
      filter,
    }?: {
      map?: any;
      filter?: any;
    }
  ) => Promise<any>;
}
