export const getStaticCss = (css: string): string => {
  return `${css}\n\n/* generated date: ${new Date().toJSON()} */\n`;
};
