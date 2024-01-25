import progress from '../../lib/lib/progress';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof progress>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('progress', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = progress(...args);
      expect(result).toBeDefined();
    });
  });
});
