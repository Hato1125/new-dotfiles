import { MaterialUI } from '../../libs/materialUI'
import { Layout } from '../../libs/layout'
import { hyprland } from '../../libs/services'

export default () => Layout.column([
  MaterialUI.icon('label_important'),
  MaterialUI.label(
    hyprland.active.client.bind('title'),
    {
      truncate: 'end',
      maxWidthChars: 50,
    }
  )
], 4)
