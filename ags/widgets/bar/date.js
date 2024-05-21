import { materialIcon} from "../../libs/icons.js"

const date = Variable("", {
  poll: [1000, 'date "+%b %d"']
})

export default () => Widget.Box({
  css: "margin: 0 8px 0 8px",
  children: [
    materialIcon(
      "calendar_today", {
        css: "margin: 0 8px 0 0",
      }
    ),
    Widget.Label({
      class_name: "bar-label",
      label: date.bind()
    })
  ]
})
