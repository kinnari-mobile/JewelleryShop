/**
 * @format
 */
import {
  ExtractThemes,
  initThemeProvider,
} from '@pavelgric/react-native-theme-provider';
import {screenWidth} from '@globals';
import {PixelRatio} from 'react-native';
import {moderateScale} from '@lib/responsiveSize/extend';

export const widthResolution =
  PixelRatio.getPixelSizeForLayoutSize(screenWidth);

const lightTheme = {
  colors: {
    primary: '#272727',
    white: '#FFFFFF',
    red: 'red',
    golden: '#CA935C',
    black: '#000000',
    lightBlack: '#676767',
    info: '#3498DB',
    success: '#228B22',
    warning: '#FFB000',
    danger: '#F83A3A',
    whitesmoke: "#f5f5f5",
    whiteborder: '#e1e1e1',
    bottomBorder: "#a6a6a6",
  },
  fonts: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
    semiBold: 'Poppins-SemiBold',
  },
  fontSizes: [
    moderateScale(10, 0.57),
    moderateScale(12, 0.49),
    moderateScale(14, 0.42),
    moderateScale(16, 0.33),
    moderateScale(18, 0.33),
    moderateScale(20, 0.31),
    moderateScale(24, 0.2),
    moderateScale(26, 0.2),
    moderateScale(28, 0.2),
    moderateScale(30, 0.2),
    moderateScale(32, 0.2),
    moderateScale(44, 0.2),
    moderateScale(50, 0.2),
    moderateScale(60, 0.2),
    moderateScale(75, 0.2),
  ],
  spacer:
    widthResolution > 640
      ? [4, 8, 12, 16, 24, 32, 64, 80, 90]
      : [4, 8, 10, 14, 20, 34, 32, 60, 80],
  // fontWeight: [100, 400],
};

const darkTheme = {
  colors: {
    primary: '#272727',
    white: '#FFFFFF',
    red: 'red',
    golden: '#CA935C',
    black: '#000000',
    lightBlack: '#676767',
    info: '#3498DB',
    success: '#228B22',
    warning: '#FFB000',
    danger: '#F83A3A',
  },
  fonts: {
    regular: 'Poppins-Regular',
    medium: 'Poppins-Medium',
    bold: 'Poppins-Bold',
    semiBold: 'Poppins-SemiBold',
  },
  fontSizes: [
    moderateScale(10, 0.57),
    moderateScale(12, 0.49),
    moderateScale(14, 0.42),
    moderateScale(16, 0.33),
    moderateScale(18, 0.33),
    moderateScale(20, 0.31),
    moderateScale(24, 0.2),
    moderateScale(26, 0.2),
    moderateScale(28, 0.2),
    moderateScale(30, 0.2),
    moderateScale(32, 0.2),
    moderateScale(44, 0.2),
    moderateScale(50, 0.2),
    moderateScale(60, 0.2),
    moderateScale(75, 0.2),
  ],
  spacer:
    widthResolution > 640
      ? [4, 8, 12, 16, 24, 32, 64, 80, 90]
      : [4, 8, 10, 14, 20, 34, 32, 60, 80],
  // fontWeight: [100, 400],
};

export const themes = {light: lightTheme, dark: darkTheme};
export type Themes = typeof themes;
export const {useTheme, ThemeProvider} = initThemeProvider({
  themes,
  initialTheme: 'light',
});

export interface ITheme {
  theme: ExtractThemes<Themes>;
}
