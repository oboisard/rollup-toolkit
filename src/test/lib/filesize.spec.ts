import filesize from '../../lib/lib/filesize';
import { decribeLib, itFunction } from '../utils';

type TTest = {
  args: Parameters<typeof filesize>;
};

const tests: Array<TTest> = [
  {
    args: [{}],
  },
];

decribeLib('filesize', () => {
  tests.forEach(({ args }, index) => {
    itFunction('result', index, () => {
      const result = filesize(...args);
      expect(result).toBeDefined();
    });
  });
});
