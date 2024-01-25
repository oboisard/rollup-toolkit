import resolve from '../../lib/lib/resolve';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof resolve>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('resolve', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = resolve(...args);
      expect(result).toBeDefined();
    });
  });
});
