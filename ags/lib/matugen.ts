import { existFile } from '../lib/utils.js';

export namespace Matugen {
  export function getJson(path: string) {
    if(!existFile(path))
      throw `"${path}" file does not exist.`;
    return JSON.parse(Utils.exec(`matugen -j hex image ${path}`));
  }

  export function getCss(path: string) {
    const json = Matugen.getJson(path);
    return `
      @define-color primary ${json.colors.light.primary};
      @define-color on-primary ${json.colors.light.on_primary};
      @define-color primary-container ${json.colors.light.primary_container};
      @define-color on-primary-container ${json.colors.light.on_primary_container};
      @define-color secondary ${json.colors.light.secondary};
      @define-color on-secondary ${json.colors.light.on_secondary};
      @define-color secondary-container ${json.colors.light.secondary_container};
      @define-color on-secondary-container ${json.colors.light.on_secondary_container};
      @define-color tertiary ${json.colors.light.tertiary};
      @define-color on-tertiary ${json.colors.light.on_tertiary};
      @define-color tertiary-container ${json.colors.light.tertiary_container};
      @define-color on-tertiary-container ${json.colors.light.on_tertiary_container};
      @define-color error ${json.colors.light.error};
      @define-color on-error ${json.colors.light.on_error};
      @define-color error-container ${json.colors.light.error_container};
      @define-color on-error-container ${json.colors.light.on_error_container};
      @define-color surface ${json.colors.light.surface};
      @define-color surface-dim ${json.colors.light.surface_dim};
      @define-color surface-bright ${json.colors.light.surface_bright};
      @define-color container ${json.colors.light.surface_container};
      @define-color container-high ${json.colors.light.surface_container_high};
      @define-color container-highest ${json.colors.light.surface_container_highest};
      @define-color on-surface ${json.colors.light.on_surface};
      @define-color on-surface-var ${json.colors.light.on_surface_variant};
    `;
  }
}
