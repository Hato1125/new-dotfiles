import Gtk from "gi://Gtk?version=3.0"

import { iconToggleButton } from "../../libs/widget.js"
import {
  TOGGLE_GAMEMODE_SCRIPTS,
  GET_GAMEMODE_SCRIPTS
} from "../../scripts.js"

export default () => iconToggleButton(
  "sports_esports",
  () =>  Utils.exec(TOGGLE_GAMEMODE_SCRIPTS)
  , {
    class_name: "gamemode-button",
    setup: self =>  self.set_active(Utils.exec(GET_GAMEMODE_SCRIPTS))
  }
)
