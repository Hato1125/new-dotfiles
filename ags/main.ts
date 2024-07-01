import core from './core';
import style from './style';
import desktop from './desktop';


core(() => {
  App.config({
    onConfigParsed: () => {
      style();
      desktop();
    }
  });
});
