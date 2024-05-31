import { materialIcon } from "../../libs/icons.js"
import { bluetooth } from "../../libs/services.js"

export default () => materialIcon("bluetooth_disabled", {
  setup: self => self.hook(bluetooth, () => {
    self.label = bluetooth.enabled
      ? "bluetooth"
      : "bluetooth_disabled"
  })
})
