const GLib = imports.gi.GLib;
const Gio = imports.gi.Gio;

export function getLinkTarget(path) {
  return Utils.exec(`readlink ${path}`);
}

export function readFile(path) {
  const [result, contents] = GLib.file_get_contents(path);
  if(!result)
    throw 'Failed to load file';
  const decoder = new TextDecoder('utf-8');
  return decoder.decode(contents);
}

export function writeFile(path, text) {
  GLib.file_set_contents(path, text);
}

export function existFile(path) {
  return GLib.file_test(path, GLib.FileTest.EXISTS);
}
