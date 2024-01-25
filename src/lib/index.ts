import { createEntry } from './entries/createEntry';
import { createDtsEntry } from './entries/createDtsEntry';
import { PREFIX_LOG } from './constants';

export const VERSION = '[VI]{version}[/VI]';
export const VERSION_DATE = new Date('[VI]{date}[/VI]');

export * from './constants';
export * from './type';
export * from './lib';

export { createEntry, createDtsEntry };

export * from './functions';

console.log(`${PREFIX_LOG} v${VERSION}`);
