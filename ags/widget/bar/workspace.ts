import { Layout } from '../../lib/layout';
import { MaterialUI } from '../../lib/materialUI';
import { hyprland } from '../../lib/services';

const workspaceNumber = (activeWorkspace, id) => MaterialUI.label(
  `${id}`,
  {
    vpack: 'center',
    setup: self => self.hook(activeWorkspace, () => {
      const uiClassName = 'material-label';
      const stateClassName = activeWorkspace.id === id
        ? 'workspace focused'
        : 'workspace unfocused';
      self.class_name = `${uiClassName} ${stateClassName}`;
    })
  }
);

export default () => {
  const activeWorkspace = hyprland.active.workspace;
  const numbers = hyprland.bind('workspaces')
    .as(ws => ws.map(({ id }) => workspaceNumber(activeWorkspace, id)));
  return Layout.column(numbers, 4);
};
