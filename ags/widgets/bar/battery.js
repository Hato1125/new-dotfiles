import { materialIcon } from "../../libs/icons.js"
import { battery } from "../../libs/services.js"

const battery_icons = [
  "battery_0_bar",
  "battery_1_bar",
  "battery_2_bar",
  "battery_3_bar",
  "battery_4_bar",
  "battery_5_bar",
  "battery_6_bar",
  "battery_full",
]

const battery_charging_icons = [
  "battery_charging_0",
  "battery_charging_10",
  "battery_charging_20",
  "battery_charging_30",
  "battery_charging_40",
  "battery_charging_50",
  "battery_charging_60",
  "battery_charging_70",
  "battery_charging_80",
  "battery_charging_90",
]

export default () => Widget.Box({
  css: "margin: 0 8px 0 8px",
  children: [
    materialIcon(
      "battery_0_bar", {
        setup: self => self.hook(battery, () => {
          const wifi_element = battery.charging ? 10 : 100 / 8
          let wifi_index = Math.floor(battery.percent / wifi_element - 1)
          if(battery.charging)
            self.label = battery_charging_icons[wifi_index]
          else
            self.label = battery_icons[wifi_index]
        }),
        css: "margin: 0 8px 0 0"
      }),
    Widget.Label({
      class_name: "common-label",
      label: battery.bind("percent").as(p => `${p}%`)
    })
  ]
})
