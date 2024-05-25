import { materialIcon } from "../../libs/icons.js"
import { label } from "../../libs/widget.js"
import { column } from "../../libs/layout.js"

const date = Variable("", {
  poll: [1000, 'date "+%b %d"']
})

export default () => column([
  materialIcon("calendar_today"),
  label(date.bind())
], 8)
