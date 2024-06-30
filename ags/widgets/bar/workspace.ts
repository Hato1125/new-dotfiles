import { Layout } from '../../libs/layout';
import { MaterialUI } from '../../libs/materialUI';
import { hyprland } from '../../libs/services';

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
