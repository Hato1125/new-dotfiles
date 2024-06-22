import { Layout } from '../../libs/layout';
import { MaterialUI } from '../../libs/materialUI';
import { hyprland } from '../../libs/services';

const workspaceNumber = (activeId, id) => MaterialUI.label(
  `${id}`,
  {
    vpack: 'center',
    class_name: activeId.as(i => `workspace ${i === id ? 'focused' : 'unfocused'}`),
  }
);

export default () => {
  const activeId = hyprland.active.workspace.bind('id');
  const numbers = hyprland.bind('workspaces')
    .as(ws => ws.map(({ id }) => workspaceNumber(activeId, id)));
  return Layout.column(numbers, 4);
};
