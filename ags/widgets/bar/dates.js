import { materialIcon } from "../../libs/icons.js"
import { label } from "../../libs/widget.js"
import { column } from "../../libs/layout.js"

const date = Variable("", {
  poll: [1000, 'date "+%m/%d"']
})

const week = Variable("", {
  poll: [1000, 'date "+%A"']
})

const clock = Variable("", {
  poll: [1000, 'date "+%H:%M"']
})

export default () => column([
  label(clock.bind()),
  label(week.bind()),
  label(date.bind())
], 8, "content")
