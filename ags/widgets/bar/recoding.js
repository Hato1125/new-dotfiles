import Gtk from "gi://Gtk?version=3.0"
import { iconToggleButton } from "../../libs/widget.js"

export default () => iconToggleButton("radio_button_checked", () => {
  Utils.execAsync("obs-cli recording pause toggle")
}, {
  class_name: "recording-button"
})
