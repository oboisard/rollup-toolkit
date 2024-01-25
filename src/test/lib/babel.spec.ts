import babel from '../../lib/lib/babel';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof babel>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('babel', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = babel(...args);
      expect(result).toBeDefined();
    });
  });
});
