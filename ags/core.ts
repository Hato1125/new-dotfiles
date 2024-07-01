export const SETTING_PATH = `${App.configDir}/setting.json`;
export const STYLE_DIR = `${App.configDir}/style`;
export const CSS_PATH = `${STYLE_DIR}/main.css`;
export const COLOR_PATH = `${STYLE_DIR}/color.css`;
export const CLI_TOOLS = [
  'date',
  'swww',
  'matugen',
  'readlink',
];

function checkExistCommands() {
  CLI_TOOLS.forEach(tool => {
    const result = Utils.exec(`which ${tool}`);
    if(result === `${tool} not found`) {
      throw `"${tool}" command does not exist.`;
    }
  });
}

export default function(running) {
  try {
    checkExistCommands();
    running();
  } catch(error) {
    App.quit();
  }
}
