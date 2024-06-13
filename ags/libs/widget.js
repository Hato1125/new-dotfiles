import { materialIcon } from "./icons.js"

export const barPosition = {
  top: "top",
  bottom: "bottom"
}

export const barWindow = (
  monitor,
  position,
  children,
  ...property
) => Widget.Window({
  class_name: "bar-window",
  name: `bar-window-${monitor}`,
  exclusivity: "exclusive",
  monitor: monitor,
  anchor: [position, "left", "right"],
  child: children,
  ...property
})

export const popupWindow = (
  position,
  monitor,
  children,
  ...property
) => Widget.Window({
  class_name: "bar-window",
  name: `popup-window-${monitor}`,
  exclusivity: "exclusive",
  layer: "overlay",
  visible: false,
  monitor,
  anchor: position,
  child: children,
  ...property
})

export const content = (
  name,
  children,
  property = {}
) => Widget.Box({
  class_name: name,
  children: children,
  ...property
})

export const centerContent = (
  start,
  center,
  end,
  property = {}
) => Widget.CenterBox({
  startWidget: start,
  centerWidget: center,
  endWidget: end,
})

export const hexpand = () => Widget.Box({
  hexpand: true
})

export const label = (
  text,
  property = {}
) => Widget.Label({
  label: text,
  ...property
})

export const button = (
  icon,
  text,
  clicked,
  property = {}
) => Widget.Button({
  child: Widget.Box({
    children: [
      materialIcon(icon),
      label(text)
    ]
  }),
  onClicked: clicked,
  ...property
})

export const iconButton = (
  icon,
  clicked,
  property = {}
) => Widget.Button({
  child: materialIcon(icon),
  onClicked: clicked,
  ...property
})

export const textButton = (
  text,
  clicked,
  property = {}
) => Widget.Button({
  child: label(text),
  onClicked: clicked,
  ...property
})

export const iconToggleButton = (
  icon,
  toggle,
  property = {}
) => Widget.ToggleButton({
  child: materialIcon(icon),
  onToggled: toggle,
  ...property
})

export const textToggleButton = (
  text,
  toggle,
  property = {}
) => Widget.ToggleButton({
  child: label(text),
  onToggled: toggle,
  ...property
})

export const contentToggleButton = (
  child,
  toggle,
  property = {}
) => Widget.ToggleButton({
  child: child,
  onToggled: toggle,
  ...property
})
