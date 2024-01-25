import versionInjector from '../../lib/lib/versionInjector';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof versionInjector>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('versionInjector', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = versionInjector(...args);
      expect(result).toBeDefined();
    });
  });
});
