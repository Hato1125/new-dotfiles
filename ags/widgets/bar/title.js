import { label, content } from "../../libs/widget.js"
import { hyprland } from "../../libs/services.js"

export default () => label(hyprland.active.client.bind("title"), {
  truncate: "end",
  maxWidthChars: 60
})
