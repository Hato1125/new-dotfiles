import { hyprland } from "./libs/services.js"
import { STYLE_SHEET } from "./settings.js"

import bar from "./widgets/bar/bar.js"
import quiksetting from "./widgets/quicsetting/quicsetting.js"

function addWindows(window) {
  hyprland.monitors.forEach((monitor) => {
    App.addWindow(window(monitor.id))
  })
}

function setting(windowTypes) {
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

function running(windowsTypes) {
  App.config({
    style: STYLE_SHEET,
    onConfigParsed: () => {
      windowsTypes.forEach((windowType) => {
        addWindows(windowType)
      })
    }
  })
}

try {
  setting([
    bar,
    quiksetting,
  ])
  running([
    bar,
    quiksetting,
  ])
} catch(error) {
  print(error)
}
