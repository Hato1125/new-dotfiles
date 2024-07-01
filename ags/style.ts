import { STYLE_DIR, CSS_PATH } from './core';

export default function() {
  try {
    Utils.monitorFile(
      STYLE_DIR,
      function() {
        App.resetCss();
        App.applyCss(CSS_PATH);
      }
    );
  } catch(error) {
    console.log(error);
  }
}
