import assetscopy from '../../lib/lib/assetscopy';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof assetscopy>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('assetscopy', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = assetscopy(...args);
      expect(result).toBeDefined();
    });
  });
});
