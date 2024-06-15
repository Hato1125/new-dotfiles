import { MaterialUI } from '../../libs/materialUI'
import { Layout } from '../../libs/Layout'
import { audio } from '../../libs/services'

const speaker = audio['speaker'];

const volume_icon = () => MaterialUI.icon(
  'volume_up',
  {
    setup: self => self.hook(audio, () => {
      self.label = speaker.volume * 100 <= 0
        ? 'volume_off'
        : 'volume_up'
    })
  }
)

const volume_label = () => MaterialUI.label(
  speaker.bind('volume').as(p => `${Math.floor(p * 100)}%`)
)

export default () => MaterialUI.box([
  Layout.column([
    volume_icon(),
    volume_label()
  ], 4)
])
