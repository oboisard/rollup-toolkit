import peerDepsExternal from '../../lib/lib/peerDepsExternal';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof peerDepsExternal>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('peerDepsExternal', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = peerDepsExternal(...args);
      expect(result).toBeDefined();
    });
  });
});
