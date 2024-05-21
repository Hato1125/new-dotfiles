import { materialIcon } from "../../libs/icons.js"

const clock = Variable("", {
  poll: [1000, 'date "+%H:%M"']
})

export default () => Widget.Box({
  css: "margin: 0 8px 0 8px",
  children: [
    materialIcon(
      "schedule", {
        css: "margin: 0 8px 0 0",
      }
    ),
    Widget.Label({
      class_name: "bar-label",
      label: clock.bind()
    })
  ]
})
