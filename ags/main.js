import { hyprland } from "./libs/services.js"
import { STYLE_SHEET } from "./settings.js"

function addWindows(window) {
  hyprland.monitors.forEach((monitor) => {
    App.addWindow(window(monitor.id))
  })
}

export function setting(windowTypes) {
  hyprland.connect("monitor-added", (_, name) => {
    const monitorIndex = hyprland.monitors.findIndex((monitor) => {
      return monitor.name === name
    })

    if(monitorIndex !== -1) {
      App.windows.forEach((window) => {
        if(monitorIndex === window.monitor)
          App.removeWindow(window)
      })

      windowTypes.forEach((windowType) => {
        App.addWindow(windowType(monitorIndex))
      })
    }
  });
}

export function running(windowsTypes) {
  App.config({
    style: STYLE_SHEET,
    onConfigParsed: () => {
      windowsTypes.forEach((windowType) => {
        addWindows(windowType)
      })
    }
  })
}
