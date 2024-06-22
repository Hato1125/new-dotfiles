import { MaterialUI } from '../../libs/materialUI';
import { network } from '../../libs/services';

const wifiIcons = [
  'signal_wifi_0_bar',
  'network_wifi_1_bar',
  'network_wifi_2_bar',
  'network_wifi_3_bar',
  'signal_wifi_4_bar',
];

export default () => MaterialUI.icon(
  'network_wifi_0_bar',
  {
    setup: self => self.hook(network, () => {
      const wifi = network.wifi;

      if(!wifi.enabled) {
        self.label = 'signal_wifi_bad';
        return;
      }

      if(wifi.internet === 'disconnected' || wifi.internet === 'connecting') {
        self.label = 'signal_wifi_off';
        return;
      }

      const inc = 100 / (wifiIcons.length - 1);
      const index = Math.floor(wifi.strength / inc);
      self.label = wifiIcons[index];
    }
  )
});
