/**
 * @format
 */
import scaledSheetCreator from './module/ScaledSheet';
import {scale, verticalScale, moderateScale} from './module/extend/scaling-utils.extend';

export const ScaledSheet = scaledSheetCreator(scale, verticalScale, moderateScale);
export * from './module/extend/scaling-utils.extend';
