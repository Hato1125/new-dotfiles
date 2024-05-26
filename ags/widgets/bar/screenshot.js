import Gtk from "gi://Gtk?version=3.0"
import { iconButton } from "../../libs/widget.js"

export default () => iconButton("screenshot_region", () => {
  Utils.execAsync("hyprshot -m region --clipboard-only")
}, {
  class_name: "screenshot-button"
})
