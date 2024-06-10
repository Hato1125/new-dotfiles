import {
  barWindow,
  popupWindow,
  barPosition,
  centerContent,
  content,
  button,
  hexpand,
  contentToggleButton
} from "../../libs/widget.js"

import {
  column,
  toggleColumn
} from "../../libs/layout.js"

import { hyprland } from "../../libs/services.js"

import dates from "./dates.js"
import battery from "./battery.js"
import workspace from "./workspace.js"
import title from "./title.js"
import wifi from "./wifi.js"
import volume from "./volume.js"
import bluetooth from "./bluetooth.js"
import gamemode from "./gamemode.js"

const startLayout = () => column([
], 16, "", {
  css: "margin: 0 0 0 32px"
})


const centerLayout = () => column([ 
  column([
    title(),
    workspace(),
  ], 16, "content"),
  dates(),
  battery(),
  volume(),
], 16)

const endLayout = () => column([
  hexpand(),
  column([
    gamemode(),
    bluetooth(),
    wifi()
  ], 16),
], 16, "", {
  css: "margin: 0 32px 0 0"
})

export default (monitor) => barWindow(
  monitor,
  barPosition.top,
  content("bar-content", [
    centerContent(
      startLayout(),
      centerLayout(),
      endLayout()
    )
  ])
)
