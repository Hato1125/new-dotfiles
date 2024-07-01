import { hyprland } from './lib/services';

import bar from './widget/bar/bar';
import {
  cornerTopLeft,
  cornerTopRight,
  cornerBottomLeft,
  cornerBottomRight,
} from './widget/roundcorner/roundcorner';

const desktopWidgets = [
  bar,
  cornerTopLeft,
  cornerTopRight,
  cornerBottomLeft,
  cornerBottomRight,
];

function forMonitor(
  widget: (monitor: number) => Widget.Window
) {
  hyprland.monitors.forEach((monitor) =>
    App.addWindow(widget(monitor.id))
  );
}

function monitorAddedEvent() {
  hyprland.connect('monitor-added', (_, name) => { 
    const index = hyprland.monitors.findIndex(monitor => {
      return monitor.name === name;
    });

    if(index !== -1) {
      App.windows.forEach(window => {
        if(index === window.monitor)
          App.removeWindow(window);
      });

      desktopWidgets.forEach(widget => {
        App.addWindow(widget(index));
      });
    }
  });
}

export default function() {
  monitorAddedEvent();
  desktopWidgets.forEach(widget => {
    forMonitor(widget);
  });
}
