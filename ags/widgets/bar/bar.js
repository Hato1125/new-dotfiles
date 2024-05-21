import clock from "./clock.js"
import date from "./date.js"
import battery from "./battery.js"
import title from "./title.js"
import wifi from "./wifi.js"

export default (monitor) => Widget.Window({
  monitor: monitor,
  class_name: "bar-window",
  name: `bar-window${monitor}`,
  exclusivity: "exclusive",
  layer: "top",
  anchor: ["bottom", "left", "right"],
  child: Widget.CenterBox({
    startWidget: Widget.Box({
      children: [
        Widget.Box({
          class_name: "start-widget",
          children: [
            date(),
            clock(),
          ]
        }),
      ]
    }),
    centerWidget: Widget.Box({
      children: [
        Widget.Box({
          class_name: "center-widget",
          children: [
            title(),
          ]
        }),
      ]
    }),
    endWidget: Widget.Box({
      children: [
        Widget.Box({
          hexpand: true,
        }),
        Widget.Box({
          class_name: "right-widget",
          children: [
            wifi(),
            battery(),
          ]
        })
      ]
    }),
  })
})
