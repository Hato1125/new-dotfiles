import { MaterialUI } from '../../lib/materialUI';
import { Layout } from '../../lib/layout';
import { hyprland } from '../../lib/services';

export default () => Layout.column([
  MaterialUI.icon('label_important'),
  MaterialUI.label(
    hyprland.active.client.bind('title'),
    {
      truncate: 'end',
      maxWidthChars: 50,
    }
  )
], 4);
