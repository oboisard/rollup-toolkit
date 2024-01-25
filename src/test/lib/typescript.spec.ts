import typescript from '../../lib/lib/typescript';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof typescript>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('typescript', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = typescript(...args);
      expect(result).toBeDefined();
    });
  });
});
