import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import { MaterialUI } from '../../lib/materialUI'

const { Gtk } = imports.gi;
const Lang = imports.lang;

export const RoundedCorner = (place, name) => Widget.DrawingArea({
  class_name: name,
  hpack: place.includes('left') ? 'start' : 'end',
  vpack: place.includes('top') ? 'start' : 'end',
  setup: (widget) => Utils.timeout(1, () => {
    const c = widget.get_style_context().get_property('background-color', Gtk.StateFlags.NORMAL);
    const r = widget.get_style_context().get_property('border-radius', Gtk.StateFlags.NORMAL);
    widget.set_size_request(r, r);
    widget.connect('draw', Lang.bind(widget, (widget, cr) => {
      switch (place) {
        case 'topleft':
          cr.arc(r, r, r, Math.PI, 3 * Math.PI / 2);
          cr.lineTo(0, 0);
          break;
        case 'topright':
          cr.arc(0, r, r, 3 * Math.PI / 2, 2 * Math.PI);
          cr.lineTo(r, 0);
          break;
        case 'bottomleft':
          cr.arc(r, 0, r, Math.PI / 2, Math.PI);
          cr.lineTo(0, r);
          break;
        case 'bottomright':
          cr.arc(0, 0, r, 0, Math.PI / 2);
          cr.lineTo(r, r);
          break;
      }
      cr.closePath();
      cr.setSourceRGBA(c.red, c.green, c.blue, c.alpha);
      cr.fill();
    }));
  }),
});

const roundedCornerWindow = (
  monitor: number,
  name: string,
  layer: string,
  position: MaterialUI.Position[]
) => MaterialUI.window(
  `${position[0]}${position[1]}`,
  monitor,
  position,
  RoundedCorner(`${position[0]}${position[1]}`, name),
  {
    layer: layer,
    exclusivity: 'normal',
    class_name: ''
  }
);

export const cornerTopLeft = (monitor) => roundedCornerWindow(
  monitor,
  'surface-corner',
  'top',
  [
    MaterialUI.Position.Top,
    MaterialUI.Position.Left,
  ]
);

export const cornerTopRight = (monitor) => roundedCornerWindow(
  monitor,
  'surface-corner',
  'top',
  [
    MaterialUI.Position.Top,
    MaterialUI.Position.Right,
  ]
);

export const cornerBottomLeft = (monitor) => roundedCornerWindow(
  monitor,
  'black-corner',
  'overlay',
  [
    MaterialUI.Position.Bottom,
    MaterialUI.Position.Left,
  ]
);

export const cornerBottomRight = (monitor) => roundedCornerWindow(
  monitor,
  'black-corner',
  'overlay',
  [
    MaterialUI.Position.Bottom,
    MaterialUI.Position.Right,
  ]
);
