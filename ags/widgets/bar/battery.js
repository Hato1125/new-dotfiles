import { materialIcon } from "../../libs/icons.js"
import { battery } from "../../libs/services.js"
import { label } from "../../libs/widget.js"
import { column } from "../../libs/layout.js"

const batteryIcons = [
  "battery_0_bar",
  "battery_1_bar",
  "battery_2_bar",
  "battery_3_bar",
  "battery_4_bar",
  "battery_5_bar",
  "battery_6_bar",
  "battery_full",
]

const batteryChargingIcons = [
  "battery_charging_full",
  "battery_charging_20",
  "battery_charging_30",
  "battery_charging_50",
  "battery_charging_60",
  "battery_charging_80",
  "battery_charging_90",
  "battery_full",
]

const batteryIcon = () => materialIcon("battery_0_bar", {
  setup: self => self.hook(battery, () => {
    const element = 100 / 7
    const index = Math.floor(battery.percent / element)
    const icons = battery.charging
      ? batteryChargingIcons
      : batteryIcons
    self.label = icons[index]
  })
})

const batteryLabel = () => label(
  battery.bind("percent").as(p => `${p}%`)
)

export default () => column([
  batteryIcon(),
  batteryLabel()
], 4, "content")
