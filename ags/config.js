import GLib from "gi://GLib"

const entry = App.configDir + '/main.ts'
const outdir = '/tmp/ags/js'
const resolvedPath = Utils.exec(`readlink ${entry}`)

try {
  await Utils.execAsync(`
    bun build ${resolvedPath}
    --outdir /tmp/ags/js
    --external 'gi://*'
    --external 'resource://*'
    --external 'file://*'
  `);
  await import(`file://${outdir}/main.js`);
} catch (error) {
  console.error(error)
}
