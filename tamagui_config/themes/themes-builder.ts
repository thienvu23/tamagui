import {createThemeBuilder} from '@tamagui/theme-builder';
import {paletteDarkColor, paletteLightColor} from '../tokens/color';
/**
 * @description edit color on paletteColor
 */
const themesBuilder = createThemeBuilder()
  .addPalettes({
    dark: paletteDarkColor,
    light: paletteLightColor,
  })
  .addTemplates({
    base: {
      // Root base color for tamagui component
      background: 2,
      backgroundHover: 3,
      backgroundPress: 4,
      backgroundFocus: 5,
      backgroundStrong: 1,
      backgroundTransparent: 0,
      color: -1,
      colorHover: -2,
      colorPress: -1,
      colorFocus: -2,
      colorTransparent: -0,
      borderColor: 5,
      borderColorHover: 6,
      borderColorFocus: 4,
      borderColorPress: 5,
      placeholderColor: -4,
    },
  })
  .addThemes({
    light: {
      template: 'base',
      palette: 'light',
    },
    dark: {
      template: 'base',
      palette: 'dark',
    },
  });

export const themes = themesBuilder.build();
