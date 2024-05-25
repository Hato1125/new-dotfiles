export const row = (
  widgets,
  space,
  name = "",
  property = {}
) => Widget.Box({
  class_name: name,
  spacing: space,
  vertical: true,
  children: widgets,
  ...property
})

export const column = (
  widgets,
  space,
  name = "",
  property = {}
) => Widget.Box({
  class_name: name,
  spacing: space,
  vertical: false,
  children: widgets,
  ...property
})

export const toggleRow = (
  widgets,
  space,
  name = "",
  buttonName = "",
  clicked,
  property = {}
) => Widget.Button({
  class_name: buttonName,
  child: row(widgets, space, name),
  onClicked: clicked,
  ...property
})

export const toggleColumn = (
  widgets,
  space,
  name = "",
  buttonName = "",
  clicked,
  property = {}
) => Widget.Button({
  class_name: buttonName,
  child: column(widgets, space, name),
  onClicked: clicked,
  ...property
})
