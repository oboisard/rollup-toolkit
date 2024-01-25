import dts from '../../lib/lib/dts';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof dts>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('dts', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = dts(...args);
      expect(result).toBeDefined();
    });
  });
});
