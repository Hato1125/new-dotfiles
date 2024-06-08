import { materialIcon } from "../../libs/icons.js"
import { hyprland } from "../../libs/services.js"
import { label } from "../../libs/widget.js"
import { column } from "../../libs/layout.js"

const workspaceNumber = (activeId, id) => label(
  `${id}`, {
    vpack: "center",
    class_name: activeId.as(i => `${i === id ? "focused" : "unfocused"}`),
  }
)

export default () => {
  const activeId = hyprland.active.workspace.bind("id")
  const workspaceButtons = hyprland.bind("workspaces")
    .as(ws => ws.map(({ id }) => workspaceNumber(activeId, id)))
  return column(workspaceButtons, 4)
}
