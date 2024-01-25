const PREFIX = '🐛 [Baleen][Front][Distribution]';

export const decribeIndex = (name: string, callback: () => void): void => {
  describe(`${PREFIX} Index:::${name}`, () => {
    !!callback && callback();
  });
};
export const decribeHelpersIndex = (
  name: string,
  callback: () => void
): void => {
  describe(`${PREFIX} Index:::helpers:::${name}`, () => {
    !!callback && callback();
  });
};

export const decribeEntries = (name: string, callback: () => void): void => {
  describe(`${PREFIX} Entries:::${name}`, () => {
    !!callback && callback();
  });
};

export const decribeLib = (name: string, callback: () => void): void => {
  describe(`${PREFIX} Lib:::${name}`, () => {
    !!callback && callback();
  });
};

export const itFunction = (
  functionName: string,
  index: number,
  callback: () => void
): void => {
  it(`${functionName} function (i=${index + 1})`, () => {
    !!callback && callback();
  });
};
