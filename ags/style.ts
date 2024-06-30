const CSS_DIR = `${App.configDir}/styles`;
const CSS_PATH = `${CSS_DIR}/main.css`;

export default function() {
  try {
    App.applyCss(CSS_PATH);
    Utils.monitorFile(
      CSS_DIR,
      function() {
        App.applyCss(CSS_PATH, true);
      }
    );
  } catch(error) {
    console.log(error);
  }
}
