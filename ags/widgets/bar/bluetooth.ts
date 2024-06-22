import { MaterialUI } from '../../libs/materialUI';
import { bluetooth } from '../../libs/services';

export default () => MaterialUI.icon(
  bluetooth.bind('enabled').as(e => `${e ? 'bluetooth' : 'bluetooth_disabled'}`)
);
