import { MaterialUI } from '../../lib/materialUI';
import { Layout } from '../../lib/Layout';
import { audio } from '../../lib/services';

const volume = audio['speaker'].bind('volume');

const volume_icon = () => MaterialUI.icon(
  volume.as(v => `${v <= 0 ? 'volume_off' : 'volume_up'}`)
);

const volume_label = () => MaterialUI.label(
  volume.as(p => `${Math.floor(p * 100)}%`)
);

export default () => MaterialUI.box([
  Layout.column([
    volume_icon(),
    volume_label()
  ], 4)
]);
