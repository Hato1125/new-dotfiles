export function materialIcon(icon, property = {}) {
  return Widget.Label({
    class_name: "material-icon",
    label: icon,
    ...property
  })
}
