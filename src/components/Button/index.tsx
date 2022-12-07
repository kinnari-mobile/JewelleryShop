/**
 * @format
 */
import React from 'react';
import { Animated, StyleProp, ViewStyle } from 'react-native';
import { Container, Text } from './styles';

export interface IButtonProps {
  text: string;
  color: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  animationConfig?: {
    startSize: number;
    endSize: number;
  };
  onPress?: () => void;
}

const scaleAnimation = {
  getScaleTransformationStyle(
    animated: Animated.Value,
    startSize = 1,
    endSize = 0.97,
  ): Animated.WithAnimatedObject<ViewStyle> {
    const interpolation = animated.interpolate({
      inputRange: [0, 1],
      outputRange: [startSize, endSize],
    });

    return {
      transform: [{ scale: interpolation }],
    };
  },

  pressInAnimation(animated: Animated.Value, duration = 150) {
    animated.setValue(0);
    Animated.timing(animated, {
      toValue: 1,
      duration,
      useNativeDriver: false,
    }).start();
  },

  pressOutAnimation(animated: Animated.Value, duration = 150) {
    animated.setValue(1);
    Animated.timing(animated, {
      toValue: 0,
      duration,
      useNativeDriver: false,
    }).start();
  },
};

function Button(props: IButtonProps) {
  const { text, color, disabled, style, animationConfig, onPress } = props;
  const scaleInAnimated = new Animated.Value(0);

  const onPressIn = () => scaleAnimation.pressInAnimation(scaleInAnimated);

  const onPressOut = () => scaleAnimation.pressOutAnimation(scaleInAnimated);

  return (
    <Container
      activeOpacity={1}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      disabled={disabled}
      color={color}
      style={[
        scaleAnimation.getScaleTransformationStyle(
          scaleInAnimated,
          animationConfig?.startSize || 1,
          animationConfig?.endSize || 0.9,
        ),
        style,
      ]}
      onPress={onPress}>
      <Text>{text}</Text>
    </Container>
  );
}

Button.defaultProps = {
  disabled: false,
  style: {},
  animationConfig: {
    startSize: 1,
    endSize: 0.9,
  },
  onPress: undefined,
};

export { Button };
