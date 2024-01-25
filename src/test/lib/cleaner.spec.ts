import cleaner from '../../lib/lib/cleaner';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof cleaner>;
};

const tests: Array<TTest> = [
  {
    args: [{ targets: [] }],
  },
];

decribeLib('babel', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = cleaner(...args);
      expect(result).toBeDefined();
    });
  });
});
