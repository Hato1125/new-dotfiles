import { materialIcon } from "../../libs/icons.js"
import { hyprland } from "../../libs/services.js"
import { label, content, textButton } from "../../libs/widget.js"
import { column } from "../../libs/layout.js"

const workspaceElement = (activeId, id) => content(
  "unfocused", [
    label(`${id}`)
  ], {
    class_name: activeId.as(i => `${i === id ? "focused" : "unfocused"}`),
  }
)

export default () => {
  const activeId = hyprland.active.workspace.bind("id")
  const workspaceButtons = hyprland.bind("workspaces")
    .as(ws => ws.map(({ id }) => workspaceElement(activeId, id)))
  return column(workspaceButtons, 4)
}
