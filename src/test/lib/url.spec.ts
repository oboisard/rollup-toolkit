import url from '../../lib/lib/url';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof url>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('url', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = url(...args);
      expect(result).toBeDefined();
    });
  });
});
