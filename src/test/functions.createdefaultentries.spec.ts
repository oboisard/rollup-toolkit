import { createDefaultEntries } from '../lib/functions';
import { decribeIndex, itFunction } from './utils';

type TTest = {
  args: Parameters<typeof createDefaultEntries>;
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
    args: [{}, {}],
    result: {
      throwError: false,
    },
  },
];

decribeIndex('createSimplyEntries', () => {
  tests.forEach(({ args, result }, index) => {
    itFunction('result', index, () => {
      if (result.throwError) {
        try {
          const res = createDefaultEntries(...args);
          expect(res).toBe(false);
        } catch (e: any) {
          expect(e.message).toBe(result.throwMessage);
        }
      } else {
        const result = createDefaultEntries(...args);
        expect(result).toBeDefined();
      }
    });
  });
});
