export namespace Layout {
  export const row = (
    children: Gtk.Widget[],
    spacing: number,
    property: any[] = {}
  ) => Widget.Box({
    class_name: 'layout-row',
    spacing: spacing,
    vertical: true,
    children: children,
    ...property
  })

  export const column = (
    children: Gtk.Widget[],
    spacing: number,
    property: any[] = {}
  ) => Widget.Box({
    class_name: 'layout-column',
    spacing: spacing,
    vertical: false,
    children: children,
    ...property
  })
}
