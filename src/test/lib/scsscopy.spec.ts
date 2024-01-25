import scsscopy from '../../lib/lib/scsscopy';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof scsscopy>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('scsscopy', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = scsscopy(...args);
      expect(result).toBeDefined();
    });
  });
});
