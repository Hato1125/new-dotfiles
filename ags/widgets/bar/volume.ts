import { MaterialUI } from '../../libs/materialUI';
import { Layout } from '../../libs/Layout';
import { audio } from '../../libs/services';

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
