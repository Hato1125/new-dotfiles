import { MaterialUI } from '../../libs/materialUI';
import { Layout } from '../../libs/layout';
import { battery } from '../../libs/services';

const batteryIcons = [
  'battery_0_bar',
  'battery_1_bar',
  'battery_2_bar',
  'battery_3_bar',
  'battery_4_bar',
  'battery_5_bar',
  'battery_6_bar',
  'battery_full',
];

const batteryChargingIcons = [
  'battery_charging_full',
  'battery_charging_20',
  'battery_charging_30',
  'battery_charging_50',
  'battery_charging_60',
  'battery_charging_80',
  'battery_charging_90',
  'battery_full',
];

const batteryIcon = () => MaterialUI.icon(
  'battery_0_bar',
  {
    setup: self => self.hook(battery, () => {
      const icons = battery.charging
        ? batteryChargingIcons
        : batteryIcons;
      const inc = 100 / (icons.length - 1);
      const index = Math.floor(battery.percent / inc);
      self.label = icons[index];
  })
});

const batteryLabel = () => MaterialUI.label(
  battery.bind('percent').as(p => `${p}%`)
);

export default () => MaterialUI.box([
  Layout.column([
    batteryIcon(),
    batteryLabel()
  ], 4)
]);
