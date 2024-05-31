import { materialIcon } from "../../libs/icons.js"
import { hyprland } from "../../libs/services.js"
import { label, textButton } from "../../libs/widget.js"
import { column } from "../../libs/layout.js"

const workspaceButton = (activeId, id) => textButton(
  `${id}`,
  () => {
  }, {
    class_name: activeId.as(i => `${i === id ? "focused" : "unfocused"}`),
    vpack: "center",
  }
)

export default () => {
  const activeId = hyprland.active.workspace.bind("id")
  const workspaceButtons = hyprland.bind("workspaces")
    .as(ws => ws.map(({ id }) => workspaceButton(activeId, id)))
  return column(workspaceButtons, 4)
}
