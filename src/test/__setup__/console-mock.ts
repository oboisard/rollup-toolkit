export const groupCollapsedMock = jest.fn();
export const groupEndMock = jest.fn();

Object.defineProperty(console, 'groupCollapsed', {
  value: groupCollapsedMock,
});

Object.defineProperty(console, 'groupEnd', {
  value: groupEndMock,
});

Object.defineProperty(console, 'log', {
  value: () => null,
});

if (!process.env.JEST_CONSOLE) {
  Object.defineProperty(console, 'warn', {
    value: () => null,
  });
}
