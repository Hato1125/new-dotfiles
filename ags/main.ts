import { hyprland } from './libs/services';

import bar from './widgets/bar/bar'
import {
  cornerTopLeft,
  cornerTopRight,
  cornerBottomLeft,
  cornerBottomRight,
} from './widgets/roundcorner/roundcorner';

function addWindows(window): void {
  hyprland.monitors.forEach((monitor) =>
    App.addWindow(window(monitor.id))
  );
}

function setting(windowTypes): void {
  hyprland.connect('monitor-added', (_, name) => {
    const monitorIndex = hyprland.monitors.findIndex((monitor) => 
      monitor.name === name
    );

    if(monitorIndex !== -1) {
      App.windows.forEach((window) => {
        if(monitorIndex === window.monitor)
          App.removeWindow(window);
      });

      windowTypes.forEach((windowType) =>
        App.addWindow(windowType(monitorIndex))
      );
    }
  });
}

function running(windowsTypes): void  {
  App.config({
    style: './styles/main.css',
    onConfigParsed: () => {
      windowsTypes.forEach((windowType) =>
        addWindows(windowType)
      );
    }
  });
}

try {
  setting([
    bar,
    cornerTopLeft,
    cornerTopRight,
    cornerBottomLeft,
    cornerBottomRight,
  ]);
  running([
    bar,
    cornerTopLeft,
    cornerTopRight,
    cornerBottomLeft,
    cornerBottomRight,
  ]);
} catch(error) {
  console.error(error);
}
