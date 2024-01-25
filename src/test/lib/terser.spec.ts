import terser from '../../lib/lib/terser';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof terser>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('terser', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = terser(...args);
      expect(result).toBeDefined();
    });
  });
});
