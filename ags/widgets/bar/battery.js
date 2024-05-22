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
  "battery_charging_full",
  "battery_charging_20",
  "battery_charging_30",
  "battery_charging_50",
  "battery_charging_60",
  "battery_charging_80",
  "battery_charging_90",
  "battery_full",
]

export default () => Widget.Box({
  css: "margin: 0 8px 0 8px",
  children: [
    materialIcon(
      "battery_0_bar", {
        setup: self => self.hook(battery, () => {
          const element = 100 / 8
          const index = Math.floor(battery.percent / element)
          const icons = battery.charging
            ? battery_charging_icons
            : battery_icons
          self.label = icons[index]
        }),
        css: "margin: 0 8px 0 0"
      }),
    Widget.Label({
      class_name: "common-label",
      label: battery.bind("percent").as(p => `${p}%`)
    })
  ]
})
