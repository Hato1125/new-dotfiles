import { MaterialUI } from '../../libs/materialUI'
import { bluetooth } from '../../libs/services'

export default () => MaterialUI.icon(
  'bluetooth_disabled',
  {
    setup: self => self.hook(bluetooth, () => {
      self.label = bluetooth.enabled
        ? 'bluetooth'
        : 'bluetooth_disabled'
    })
  }
)
