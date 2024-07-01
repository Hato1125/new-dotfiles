import Service from 'resource:///com/github/Aylur/ags/service.js';

import {
  SETTING_PATH,
  STYLE_DIR,
  CSS_PATH,
  COLOR_PATH
} from '../core';

import {
  getLinkTarget,
  readFile,
  writeFile
} from '../lib/utils';

import {
  writeFile,
  existFile,
  getLinkTarget,
} from '../lib/utils';

import { Matugen } from '../lib/matugen';

class Wallpaper extends Service {
  static {
    Service.register(this, {}, {
      'wallpaper': ['jsobject']
    });
  }

  private wallpaper = {
    wallpaper: {
      monitor: 0,
      path: ''
    }
  };

  get wallpaper() {
    return this.wallpaper;
  }

  private load() {
    this.wallpaper = JSON.parse(readFile(SETTING_PATH));
    this.changed('wallpaper');
  }

  private save() {
    writeFile(
      getLinkTarget(SETTING_PATH),
      JSON.stringify(this.wallpaper)
    );
  }

  readonly set = (
    index: number,
    wallpaper: string,
    initializing: boolean = false
  )  => {
    if(index <= this.wallpaper.wallpaper.length) {
      if(!initializing && this.wallpaper.wallpaper[index].path === wallpaper)
        return;

      if(existFile(wallpaper)) {
        writeFile(
          COLOR_PATH,
          Matugen.getCss(wallpaper)
        );
        App.resetCss();
        App.applyCss(CSS_PATH);

        Utils.exec(`
          swww img
          --transition-type grow
          --transition-pos 0.854,0.900
          --transition-step 90
          ${wallpaper}
        `);

        this.wallpaper.wallpaper[index].path = wallpaper;
        this.changed('wallpaper');
      }
    }
  };

  constructor() {
    super();

    this.load();
    this.set(0, this.wallpaper.wallpaper[0].path, true);

    Utils.monitorFile(
      getLinkTarget(SETTING_PATH),
      this.load()
    );
  }
}

const service = new Wallpaper();
export default service;
