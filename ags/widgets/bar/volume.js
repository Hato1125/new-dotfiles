import { materialIcon } from "../../libs/icons.js"
import { audio } from "../../libs/services.js"
import { label } from "../../libs/widget.js"
import { column } from "../../libs/layout.js"

const volume_icon = () => materialIcon("volume_up", {
  setup: self => self.hook(audio, () => {
    const volume = Math.floor(audio["speaker"].volume * 100)
    self.label = volume <= 0
      ? "volume_off"
      : "volume_up"
  })
})

const volume_label = () => label(
  audio["speaker"].bind("volume").as(p => `${Math.floor(p * 100)}%`)
)

export default () => column([
  volume_icon(),
  volume_label()
], 4, "content")
