/**
 * @format
 */
import {Dimensions} from 'react-native';

export const sizeMattersBase = {
  width: 375,
  height: 812,
};

const {width, height} = Dimensions.get('window');
const [shortDimension, longDimension] = width < height ? [width, height] : [height, width];

// Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = sizeMattersBase.width || 350;
const guidelineBaseHeight = sizeMattersBase.height || 680;

export const scale = size => (shortDimension / guidelineBaseWidth) * size;
export const verticalScale = size => (longDimension / guidelineBaseHeight) * size;
export const moderateScale = (size, factor = 0.5) => size + (scale(size) - size) * factor;

export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
