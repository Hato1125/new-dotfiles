import {
  barWindow,
  barPosition,
  centerContent,
  content,
  button,
  hexpand
} from "../../libs/widget.js"

import {
  column,
  toggleColumn
} from "../../libs/layout.js"

import clock from "./clock.js"
import date from "./date.js"
import battery from "./battery.js"
import title from "./title.js"
import wifi from "./wifi.js"
import volume from "./volume.js"

export default (monitor) => barWindow(
  monitor,
  barPosition.bottom,
  centerContent(
    content("", [
      column([
        date(),
        clock()
      ], 16, "start-content")
    ]),
    content("", [
      title()
    ]),
    content("", [
      hexpand(),
      toggleColumn([
        volume(),
        wifi(),
        battery()
      ], 16, "end-content", "quik-toggle-button", () => {
      })
    ])
  )
)
