import scss from '../../lib/lib/scss';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof scss>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('scss', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = scss(...args);
      expect(result).toBeDefined();
    });
  });
});
