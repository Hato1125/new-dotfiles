import { MaterialUI } from '../../lib/materialUI';
import { bluetooth } from '../../lib/services';

export default () => MaterialUI.icon(
  bluetooth.bind('enabled').as(e => `${e ? 'bluetooth' : 'bluetooth_disabled'}`)
);
