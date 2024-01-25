import { getStaticCss } from '../lib/helpers';
import { decribeHelpersIndex, itFunction } from './utils';

type TTest = {
  args: Parameters<typeof getStaticCss>;
  result: {
    string: string;
  };
};

const tests: Array<TTest> = [
  {
    args: ['CSS FILE'],
    result: {
      string: '',
    },
  },
];

decribeHelpersIndex('helpers:getStaticCss', () => {
  tests.forEach(({ args /*, result */ }, index) => {
    itFunction('result', index, () => {
      const res = getStaticCss(...args);
      expect(res).toBeDefined();
      expect(typeof res).toBe('string');
    });
  });
});
