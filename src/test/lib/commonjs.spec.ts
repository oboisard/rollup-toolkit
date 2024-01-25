import commonjs from '../../lib/lib/commonjs';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof commonjs>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('commonjs', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = commonjs(...args);
      expect(result).toBeDefined();
    });
  });
});
