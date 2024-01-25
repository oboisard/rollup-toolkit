import rollupCopy, { Target } from 'rollup-plugin-copy';
import { createTransform } from 'rollup-copy-transform-css';
import { TPluginSCSSCopyOptions } from '../type';

export default (
  config: TPluginSCSSCopyOptions
): ReturnType<typeof rollupCopy> => {
  const { directory = 'dist/' } = config;
  const {
    dest = directory,
    format = 'esm',
    file = 'index.css',
    output = 'style.css',
    outputMinify = 'style.min.css',
  } = config;

  if (!directory.endsWith('/')) {
    throw 'directory must end with "/"';
  }

  if (!file) {
    throw 'file is mandatory';
  }
  const src = `${directory}${format}/${file}`;

  if (!src.endsWith('.css')) {
    throw 'src must be a css path';
  }

  if (output && !output.endsWith('.css')) {
    throw 'output must be a css path';
  }

  if (outputMinify && !outputMinify.endsWith('.css')) {
    throw 'outputMinify must be a css path';
  }

  const targets: Array<Target> = [];

  if (output) {
    targets.push({
      src,
      dest,
      rename: output,
    });
  }

  if (outputMinify) {
    targets.push({
      src,
      dest,
      rename: outputMinify,
      transform: createTransform({
        inline: true,
        minify: true,
      }),
    });
  }

  return rollupCopy({
    targets,
    hook: 'writeBundle',
    verbose: true,
    ...config,
  });
};
