export namespace MaterialUI {
  export enum Position {
    Top = 'top',
    Bottom = 'bottom',
    Left = 'left',
    Right = 'right',
  };

  export const window = (
    name: string,
    monitor: number,
    position: position[],
    child: Gtk.Widget,
    property: any[] = {}
  ) => Widget.Window({
    class_name: 'material-window',
    exclusivity: 'exclusive',
    name: `$material-${name}-window-${monitor}`,
    monitor: monitor,
    anchor: [...position],
    child: child,
    ...property
  });

  export const box = (
    children: Gtk.Widget[],
    property: any[] = {}
  ) => Widget.Box({
    class_name: 'material-box',
    children: children,
    ...property
  });

  export const centerBox = (
    start: Gtk.Widget,
    center: Gtk.Widget,
    end: Gtk.Widget,
    property: any[] = {}
  ) => Widget.CenterBox({
    startWidget: start,
    centerWidget: center,
    endWidget: end,
    ...property
  });

  export const hexpand = () => Widget.Box({
    hexpand: true
  });

  export const label = (
    text: string,
    property: any[] = {}
  ) => Widget.Label({
    class_name: 'material-label',
    label: text,
    ...property
  });

  export const button = (
    children: Gtk.Widget,
    click: () => void,
    property: any[] = {}
  ) => Widget.Button({
    child: children,
    onClicked: click,
    ...property
  });

  export const icon = (
    text: string,
    property: any[] = {}
  ) => Widget.Label({
    class_name: 'material-icon',
    label: text,
    ...property
  });
}
