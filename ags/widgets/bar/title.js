import { materialIcon } from "../../libs/icons.js"
import { hyprland } from "../../libs/services.js"
import { label } from "../../libs/widget.js"
import { column } from "../../libs/layout.js"

export default () => column([
  materialIcon("label_important"),
  label(
    hyprland.active.client.bind("title"), {
      truncate: "end",
      maxWidthChars: 50
  })
], 4)
