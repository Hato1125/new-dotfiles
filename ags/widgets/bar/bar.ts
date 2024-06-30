import { MaterialUI } from '../../libs/materialUI';
import { Layout } from '../../libs/layout';
import { RoundedCorner } from '../roundcorner/roundcorner';

import dates from './dates';
import battery from './battery';
import workspace from './workspace';
import title from './title';
import wifi from './wifi';
import volume from './volume';
import bluetooth from './bluetooth';

const position = [
  MaterialUI.Position.Top,
  MaterialUI.Position.Left,
  MaterialUI.Position.Right
];

const startLayout = () => RoundedCorner(
  'topleft',
  'black-corner'
);

const centerLayout = () => Layout.column([
  MaterialUI.box([
    Layout.column([
      title(),
      workspace(),
    ], 8),
  ]),
  dates(),
  volume(),
], 16);

const endLayout = () => MaterialUI.box([
  MaterialUI.hexpand(),
  Layout.column([
    battery(),
    wifi(),
    bluetooth(),
  ], 16, {
    css: 'margin-right: 32px',
  }),
  RoundedCorner(
    'topright',
    'black-corner'
  ),
], {
  class_name: '',
});

export default (monitor) => MaterialUI.window(
  'bar',
  monitor,
  position,
  MaterialUI.centerBox(
    startLayout(),
    centerLayout(),
    endLayout()
  )
);
