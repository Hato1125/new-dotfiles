export const materialIcon = (
  icon,
  property = {}
) => Widget.Label({
  class_name: "material-icon",
  label: icon,
  ...property
})
