import { MaterialUI } from '../../libs/materialUI'
import { Layout } from '../../libs/layout'

import dates from './dates'
import battery from './battery'
import workspace from './workspace'
import title from './title'
import wifi from './wifi'
import volume from './volume'
import bluetooth from './bluetooth'

const position = [
  MaterialUI.position.top,
  MaterialUI.position.left,
  MaterialUI.position.right
];

export default (monitor) => MaterialUI.window(
  'bar',
  monitor,
  position,
  MaterialUI.centerBox(
    Layout.column([
    ], 16,
    {
      css: 'margin: 0 0 0 32px'
    }),
    Layout.column([
      MaterialUI.box([
        Layout.column([
          title(),
          workspace(),
        ], 8)
      ]),
      dates(),
      volume(),
      battery(),
    ], 16),
    Layout.column([
      MaterialUI.hexpand(),
      bluetooth(),
      wifi(),
    ], 16,
    {
      css: 'margin: 0 32px 0 0'
    })
  )
);
