/**
 * @format
 */
import scaledSheetCreator from './module/ScaledSheet';
import {scale, verticalScale, moderateScale} from './module/scaling-utils';

export const ScaledSheet = scaledSheetCreator(scale, verticalScale, moderateScale);
export * from './module/scaling-utils';
