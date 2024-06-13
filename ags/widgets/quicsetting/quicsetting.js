import Gdk from "gi://Gdk"

import { hyprland } from "../../libs/services.js"
import { popupWindow, content } from "../../libs/widget.js"
import { row } from "../../libs/layout.js"

export default (monitor) => popupWindow(
  ["right", "top"],
  monitor,
  content("quick-setting-background", [
    row([
    ], 8)
  ], {
    css: "min-width: 515px; min-height: 510px;"
  })
)

export function toggleQuickSetting() {
  for(let i = 0; i < 2; i++) {
    App.windows.forEach((window) => {
      if(window.name === `popup-window-${i}`) {
        App.toggleWindow(window.name)
      }
    })
  }
}
