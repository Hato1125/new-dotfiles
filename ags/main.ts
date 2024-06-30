import style from './style';
import desktop from './desktop';

App.config({
  onConfigParsed: () => {
    style();
    desktop();
  }
});
