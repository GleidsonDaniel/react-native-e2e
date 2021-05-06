const colors = {
  cyan: '#05bcfa',
  darkCyan: '#0496C8',
  darkGray: '#545454',
  darkShade: '#4B6484',
  gray: '#ECECEC',
  green: '#31CFA5',
  greenDarkGreen: '#00B686',
  lightCyan: '#E1F7FF',
  lightShade: '#DDE3EA',
  mediumGray: '#979797',
  shade: '#5E7BA1',
  shadeDarkShade: '#4B6484',
  tabBarUnselectedIcon: '#a3b0be',
  white: '#FFFFFF',
  salmone: '#FA5961',
  darkSunny: '#E8A700',
  sunny: '#FFBC0D',
  grayLightGray: '#BFBFBF',
};

export const theme = {
  colors,
};

export type theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends theme {}
}
