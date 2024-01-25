import { createDtsEntry } from '../../lib/entries/createDtsEntry';
import { TFormat } from '../../lib/type';
import { decribeEntries, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof createDtsEntry>;
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
    args: [{ hasProgress: false }],
    result: {
      throwError: false,
    },
  },
  {
    args: [
      {
        plugins: {
          progress: {},
          dts: {},
        },
      },
    ],
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
    args: [{ format: '' as TFormat }],
    result: {
      throwError: true,
      throwMessage: 'format is mandatory',
    },
  },
  {
    args: [{ input: '' }],
    result: {
      throwError: true,
      throwMessage: 'input is mandatory',
    },
  },
];

decribeEntries('createDtsEntry', () => {
  tests.forEach(({ args, result }, index) => {
    itFunction('result', index, () => {
      if (result.throwError) {
        try {
          const result = createDtsEntry(...args);
          expect(result).toBe(false);
        } catch (e: any) {
          expect(e.message).toBe(result.throwMessage);
        }
      } else {
        const result = createDtsEntry(...args);
        expect(result).toBeDefined();
      }
    });
  });
});
