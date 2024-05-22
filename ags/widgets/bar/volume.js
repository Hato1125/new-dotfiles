import { materialIcon } from "../../libs/icons.js"
import { audio } from "../../libs/services.js"

export default () => Widget.Box({
  css: "margin: 0 8px 0 8px",
  children: [
    materialIcon(
      "volume_up", {
        setup: self => self.hook(audio, () => {
          const volume = Math.floor(audio["speaker"].volume * 100);
          self.label = volume <= 0
            ? "volume_off"
            : "volume_up"
        }),
        css: "margin: 0 8px 0 0"
      }),
    Widget.Label({
      class_name: "common-label",
      label: audio["speaker"].bind("volume").as(p => `${Math.floor(p * 100)}%`)
    })
  ]
})
