import { materialIcon } from "../../libs/icons.js"
import { audio } from "../../libs/services.js"

export default () => materialIcon("volume_up", {
  setup: self => self.hook(audio, () => {
    const volume = Math.floor(audio["speaker"].volume * 100)
    self.label = volume <= 0
      ? "volume_off"
      : "volume_up"
  })
})
