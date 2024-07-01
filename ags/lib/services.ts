export const battery = await Service.import('battery')
export const hyprland = await Service.import('hyprland')
export const network = await Service.import('network')
export const audio = await Service.import('audio')
export const bluetooth = await Service.import('bluetooth')

import importWallpaper from '../service/wallpaper';
export const wallpaper = importWallpaper;
