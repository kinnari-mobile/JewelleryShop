/**
 * @format
 */
import { ITheme } from '@theme';
import { TouchableOpacity, Animated } from 'react-native';
import styled from 'styled-components/native';
import { IButtonContainer } from '../button.types';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);
export const Container = styled(AnimatedTouchableOpacity) <IButtonContainer>`
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  align-self: flex-start;

  background-color: ${({ color, theme, disabled }) => {
    const disabledColor = disabled ? '50' : '';
    const final_color = color || theme.colors.primary;
    return `${final_color}${disabledColor}`;
  }};
`;

export const Text = styled.Text<ITheme>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 500;
  line-height: 35px;
  margin-top: 5px;
`;
