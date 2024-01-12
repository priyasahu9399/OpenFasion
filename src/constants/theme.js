import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  // open fashion
  primary: 'rgba(231, 234, 239, 1)',
  brown: 'rgba(221, 133, 96, 1)',
  border: 'rgba(222, 222, 222, 1)',
  white: '#FFFFFF',
  gray: 'rgba(136, 136, 136, 1)',
  gray1: 'rgba(196, 196, 196, 1)',
  lightgray: 'rgba(245, 245, 245, 1)',
  darkgray: 'rgba(51, 51, 51, 1)',

  
  // black
  black: '#000000',
  // gray10: 'rgba(89, 84, 84, 1)',
  gray10: '#D9D9D9',
  gray20: 'rgba(151, 151, 151, 1)',
  gray30: 'rgba(147, 147, 147, 1)',
  gray40: '#999999',
  gray50: '#7F7F7F',
  gray60: '#666666',
  gray70: '#4C4C4C',
  gray80: '#333333',
  gray85: '#242526',
  gray90: '#191919',

  // lightGray
  lightGray: '#C1C1C1',
  lightGray1: '#DDDDDD',
  lightGray10: 'rgba(242, 242, 242, 1)',
  lightGray31: 'rgba(196, 196, 196, 0.31)',
};

export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,
  padding1: 15,
  margin: 20,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  //Font family
  black: 'Poppins-Black-900',
  bold: 'Poppins-Bold-700',
  semiBold: 'Poppins-SemiBold-600',
  medium: 'Poppins-Medium-500',
  regular: 'Poppins-Regular-400',
  light: 'Poppins-Light-300',
  thin: 'Poppins-Thin-250',

  fourHundred: {fontFamily: 'Poppins-Regular-400'},
  fiveHundred: {fontFamily: 'Poppins-Medium-500'},
  sixHundred: {fontFamily: 'Poppins-SemiBold-600'},
  sevenHundred: {fontFamily: 'Poppins-Bold-700'},
  eightHundred: {fontFamily: 'Poppins-ExtraBold-800'},
  nineHundred: {fontFamily: 'Poppins-Black-900'},
};

export const darkTheme = {
  backgroundColor: COLORS.darkBackground,
};

export const lightTheme = {
  backgroundColor: COLORS.white,
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
