import { materialIcon } from "../../libs/icons.js"
import { network } from "../../libs/services.js"

const wifi_icons = [
  "signal_wifi_0_bar",
  "network_wifi_1_bar",
  "network_wifi_2_bar",
  "network_wifi_3_bar",
  "signal_wifi_4_bar",
]

export default () => materialIcon("network_wifi_0_bar", {
  setup: self => self.hook(network, () => {
    if(network.wifi.internet == "disconnected"
      || network.wifi.internet == "connecting") {
      self.label = "signal_wifi_off"
    } else {
      const element = 100 / 4
      const index = Math.floor(network.wifi.strength / element)
      self.label = wifi_icons[index]
    }
  })
})
