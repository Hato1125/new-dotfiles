import { MaterialUI } from '../../libs/materialUI'
import { network } from '../../libs/services'

const wifi_icons = [
  'signal_wifi_0_bar',
  'network_wifi_1_bar',
  'network_wifi_2_bar',
  'network_wifi_3_bar',
  'signal_wifi_4_bar',
]

const wifi = network.wifi

export default () => MaterialUI.icon(
  'network_wifi_0_bar',
  {
    setup: self => self.hook(network, () => {
      if(wifi.internet === 'disconnected'
        || wifi.internet === 'connecting') {
        self.label = 'signal_wifi_off'
      } else {
        const element = 100 / 4
        const index = Math.floor(wifi.strength / element)
        self.label = wifi_icons[index]
      }
    }
  )
})
