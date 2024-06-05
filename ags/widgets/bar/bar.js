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

import dates from "./dates.js"
import battery from "./battery.js"
import workspace from "./workspace.js"
import title from "./title.js"
import wifi from "./wifi.js"
import volume from "./volume.js"
import bluetooth from "./bluetooth.js"
import screenshot from "./screenshot.js"

export default (monitor) => barWindow(
  monitor,
  barPosition.top,
  content("bar-content", [
    centerContent(
      column([
      ], 16, "start-content"),
      column([
        column([
          title(),
          workspace(),
        ],16, "content"),
        dates(),
        battery(),
        volume(),
      ], 16),
      content("", [
        hexpand(),
        column([
          bluetooth(),
          wifi()
        ], 16, "end-content"),
      ])
    )
  ])
)
