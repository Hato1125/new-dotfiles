import { getLinkTarget } from './lib/utils.js';

const ENTRY = `${App.configDir}/main.ts`;
const OUTPUT = '/tmp/ags/js';

try {
  await Utils.execAsync(`
    bun build ${getLinkTarget(ENTRY)}
    --outdir /tmp/ags/js
    --external 'gi://*'
    --external 'resource://*'
    --external 'file://*'
  `);
  await import(`file://${OUTPUT}/main.js`);
} catch (error) {
  console.error(error);
}
