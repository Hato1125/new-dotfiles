const hyprland = await Service.import("hyprland")

export default () => Widget.Label({
  class_name: "common-label",
  truncate: "end",
  maxWidthChars: 60,
  label: hyprland.active.client.bind("title"),
})
