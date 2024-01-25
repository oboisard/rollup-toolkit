import { createEntry } from '../../lib/entries/createEntry';
import { decribeEntries, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof createEntry>;
  result: {
    throwError: boolean;
    throwMessage?: string;
  };
};

const tests: Array<TTest> = [
  {
    args: [],
    result: {
      throwError: false,
    },
  },
  {
    args: [{}],
    result: {
      throwError: false,
    },
  },
  {
    args: [
      {
        output: () => '',
        outputMinify: () => '',
        hasVersionInjector: false,
        hasProgress: false,
        hasCleaner: false,
        hasCleanup: false,
        hasAssetsCopy: false,
        hasCommonjs: false,
        hasResolve: false,
        hasTypescript: false,
        hasPeerDepsExternal: false,
        hasBabel: false,
        hasUrl: false,
        hasScss: false,
        hasFilesize: false,
        hasCopy: false,
      },
    ],
    result: {
      throwError: false,
    },
  },
  {
    args: [
      {
        output: () => 'TEST-FILE',
        outputMinify: () => 'TEST-MINIFY',
        outputMinifyPlugins: [],
        plugins: {
          versionInjector: {},
          terser: {},
          progress: {},
          cleaner: { targets: [] },
          cleanup: {},
          assetscopy: {},
          commonjs: {},
          resolve: {},
          peerDepsExternal: {},
          babel: {},
          typescript: {},
          url: {},
          scss: {},
          scsscopy: {},
          filesize: {},
          copy: {},
        },
      },
    ],
    result: {
      throwError: false,
    },
  },
  {
    args: [{ external: ['TEST'] }],
    result: {
      throwError: false,
    },
  },
  {
    args: [{ directory: '' }],
    result: {
      throwError: true,
      throwMessage: 'directory is mandatory',
    },
  },
  {
    args: [{ directory: 'blabla' }],
    result: {
      throwError: true,
      throwMessage: 'directory must end with "/"',
    },
  },
  {
    args: [{ input: '' }],
    result: {
      throwError: true,
      throwMessage: 'input is mandatory',
    },
  },
  {
    args: [{ formats: [] }],
    result: {
      throwError: true,
      throwMessage: 'formats is mandatory',
    },
  },
];

decribeEntries('createEntry', () => {
  tests.forEach(({ args, result }, index) => {
    itFunction('result', index, () => {
      if (result.throwError) {
        try {
          const result = createEntry(...args);
          expect(result).toBe(false);
        } catch (e: any) {
          expect(e.message).toBe(result.throwMessage);
        }
      } else {
        const result = createEntry(...args);
        expect(result).toBeDefined();
      }
    });
  });
});
