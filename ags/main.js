import bar from "./widgets/bar/bar.js"

import { hyprland } from "./libs/services.js"
import { STYLE_SHEET } from "./settings.js"

function addWindows(window) {
  hyprland.monitors.forEach((monitor) => {
    App.addWindow(window(monitor.id))
  })
}

export function setting() {
  hyprland.connect("monitor-added", (_, name) => {
    const monitorIndex = hyprland.monitors.findIndex((monitor) => {
      return monitor.name === name
    })

    if(monitorIndex !== -1) {
      App.windows.forEach((window) => {
        if(monitorIndex === window.monitor)
          App.removeWindow(window)
      })
      App.addWindow(bar(monitorIndex))
    }
  });
}

export function running() {
  App.config({
    style: STYLE_SHEET,
    onConfigParsed: () => {
      addWindows(bar)
    }
  })
}
