import {createFont, createTamagui} from 'tamagui'; // or '@tamagui/core'
import {shorthands} from '@tamagui/shorthands';
import {tokens} from './tamagui_config';
import {themes} from '@tamagui/themes';
import {TextStyle} from 'react-native';

export const getFontFamilies = (name = 'Montserrat') => ({
  thin: {
    normal: `${name}-Thin`,
    italic: `${name}-LightItalic`,
  },
  extraLight: {
    normal: `${name}-ExtraLight`,
    italic: `${name}-ExtraLightItalic`,
  },
  light: {
    normal: `${name}-Light`,
    italic: `${name}-LightItalic`,
  },
  regular: {
    normal: `${name}-Regular`,
    italic: `${name}-Italic`,
  },
  medium: {
    normal: `${name}-Medium`,
    italic: `${name}-MediumItalic`,
  },
  semiBold: {
    normal: `${name}-SemiBold`,
    italic: `${name}-SemiBoldItalic`,
  },
  bold: {
    normal: `${name}-Bold`,
    italic: `${name}-BoldItalic`,
  },
  extraBold: {
    normal: `${name}-ExtraBold`,
    italic: `${name}-ExtraBoldItalic`,
  },
  extraBlack: {
    normal: `${name}-ExtraBlack`,
    italic: `${name}-ExtraBlackItalic`,
  },
});
const defaultFontFamily = getFontFamilies();

// FONT CREATE
const font = createFont({
  family: defaultFontFamily.regular.normal,
  // keys used for the objects you pass to `size`, `lineHeight`, `weight`
  // and `letterSpacing` should be consistent. The `createFont` function
  // will fill-in any missing values if `lineHeight`, `weight` or `letterSpacing`
  // are subsets of `size`
  size: {
    1: 5,
    2: 7,
    3: 9,
    4: 10,
    5: 12,
    6: 14,
    7: 15,
    8: 18,
    9: 22,
    10: 30,
    11: 48,
  },
  lineHeight: {},
  weight: {
    1: '100',
    2: '200',
    3: '300',
    4: '400',
    5: '500',
    6: '600',
    7: '700',
    8: '800',
    9: '900',
  },
  letterSpacing: {
    true: 1,
  },
  // using this for Android (native) swap out fonts by face/style, because fontWeight not working on Android
  face: {
    100: defaultFontFamily.thin,
    200: defaultFontFamily.extraLight,
    300: defaultFontFamily.light,
    400: defaultFontFamily.regular,
    500: defaultFontFamily.medium,
    600: defaultFontFamily.semiBold,
    700: defaultFontFamily.bold,
    800: defaultFontFamily.extraBold,
    900: defaultFontFamily.extraBlack,
  },
  style: {
    a: {
      fonSize: 20,
      backgroundColor: 'pink',
    } as unknown as TextStyle['fontStyle'],
  },
});

// CREATE TAMAGUI CONFIG
const config = createTamagui({
  fonts: {
    // for tamagui, heading and body are assumed
    heading: font,
    body: font,
  },
  tokens,
  themes,

  // NOT IN USE
  media: {
    xs: {maxWidth: 660},
    gtXs: {minWidth: 660 + 1},
    sm: {maxWidth: 860},
    gtSm: {minWidth: 860 + 1},
    md: {maxWidth: 980},
    gtMd: {minWidth: 980 + 1},
    lg: {maxWidth: 1120},
    gtLg: {minWidth: 1120 + 1},
    short: {maxHeight: 820},
    tall: {minHeight: 820},
    hoverNone: {hover: 'none'},
    pointerCoarse: {pointer: 'coarse'},
  },

  // add custom shorthand props
  // note: as const is important, without it you may see breaking types
  shorthands,
});

type AppConfig = typeof config;

// this will give you types for your components
// note - if using your own design system, put the package name here instead of tamagui
declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default config;
