import { MaterialUI } from '../../libs/materialUI'
import { Layout } from '../../libs/layout'

const position = [
  MaterialUI.top,
  MaterialUI.right,
]

const layout = Layout.row([
  Widget.Label('Hello'),
  Widget.Label('Hello'),
  Widget.Label('Hello'),
], 8)

export default (monitor) => MaterialUI.window(
  'quicksetting',
  monitor,
  position,
  layout
)
