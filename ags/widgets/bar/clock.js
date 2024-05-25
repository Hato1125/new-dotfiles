import { materialIcon } from "../../libs/icons.js"
import { label } from "../../libs/widget.js"
import { column } from "../../libs/layout.js"

const clock = Variable("", {
  poll: [1000, 'date "+%H:%M"']
})

export default () => column([
  materialIcon("schedule"),
  label(clock.bind())
], 8)
