/**
 * @format
 */
import {Dimensions, Platform, StyleProp, TextStyle} from 'react-native';

export const isAndroid = Platform.OS === 'android';

export const sizeMattersBase = {width: 375, height: 812};

export const screenWidth = Dimensions.get('window').width;
export const screenHeight = Dimensions.get('window').height;

export const hidePhoneNumberRegExp = /\d(?=(?:\D*\d){3})/g;
export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const labelSize = 14;
export const labelStyle: StyleProp<TextStyle> = {
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '400',
  fontSize: labelSize,
  color: '#999999',
};
