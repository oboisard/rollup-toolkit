import { createEntries } from '../lib/functions';
import { decribeIndex, itFunction } from './utils';

type TTest = {
  args: Parameters<typeof createEntries>;
  result: {
    throwError: boolean;
    throwMessage?: string;
  };
};

const tests: Array<TTest> = [
  {
    args: [],
    result: {
      throwError: true,
      throwMessage: 'configs is mandatory',
    },
  },
  {
    args: [{}],
    result: {
      throwError: false,
    },
  },
];

decribeIndex('createEntries', () => {
  tests.forEach(({ args, result }, index) => {
    itFunction('result', index, () => {
      if (result.throwError) {
        try {
          const res = createEntries(...args);
          expect(res).toBe(false);
        } catch (e: any) {
          expect(e.message).toBe(result.throwMessage);
        }
      } else {
        const res = createEntries(...args);
        expect(res).toBeDefined();
      }
    });
  });
});
