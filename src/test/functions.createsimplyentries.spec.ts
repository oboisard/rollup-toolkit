import { createSimplyEntries } from '../lib/functions';
import { decribeIndex, itFunction } from './utils';

type TTest = {
  args: Parameters<typeof createSimplyEntries>;
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

decribeIndex('createSimplyEntries', () => {
  tests.forEach(({ args, result }, index) => {
    itFunction('result', index, () => {
      if (result.throwError) {
        try {
          const res = createSimplyEntries(...args);
          expect(res).toBe(false);
        } catch (e: any) {
          expect(e.message).toBe(result.throwMessage);
        }
      } else {
        const res = createSimplyEntries(...args);
        expect(res).toBeDefined();
      }
    });
  });
});
