/**
 * @format
 */
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {View, Animated} from 'react-native';

import styles from './styles';

const lineTypes = PropTypes.oneOf(['solid', 'dotted', 'dashed', 'none']);

export default class Line extends PureComponent {
  static defaultProps = {
    lineType: 'solid',
    disabledLineType: 'dotted',

    disabled: false,
    restricted: false,
  };

  static propTypes = {
    lineType: lineTypes,
    disabledLineType: lineTypes,

    disabled: PropTypes.bool,
    restricted: PropTypes.bool,

    tintColor: PropTypes.string,
    baseColor: PropTypes.string,
    errorColor: PropTypes.string,
    lineColor: PropTypes.string,
    lineTintColor: PropTypes.string,
    disabledLineColor: PropTypes.string,
    lineContainer: PropTypes.object,

    lineWidth: PropTypes.number,
    activeLineWidth: PropTypes.number,
    disabledLineWidth: PropTypes.number,

    focusAnimation: PropTypes.instanceOf(Animated.Value),
  };

  static getDerivedStateFromProps(props, state) {
    const {lineWidth, activeLineWidth, disabledLineWidth} = props;

    const maxLineWidth = Math.max(lineWidth, activeLineWidth, disabledLineWidth, 1);

    if (maxLineWidth !== state.maxLineWidth) {
      return {maxLineWidth};
    }

    return null;
  }

  state = {maxLineWidth: 1};

  borderProps() {
    const {
      disabled,
      restricted,
      lineWidth,
      activeLineWidth,
      disabledLineWidth,
      baseColor,
      tintColor,
      errorColor,
      lineColor,
      disabledLineColor,
      lineTintColor,
      focusAnimation,
    } = this.props;

    const selectedLineColor = lineColor || baseColor;
    const selectedLineTintColor = lineTintColor || tintColor;
    const selectedDisabledLineColor = disabledLineColor || baseColor;

    if (disabled) {
      return {
        borderColor: selectedDisabledLineColor,
        borderWidth: disabledLineWidth,
      };
    }

    if (restricted) {
      return {
        borderColor: errorColor,
        borderWidth: activeLineWidth,
      };
    }

    return {
      borderColor: focusAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [errorColor, selectedLineColor, selectedLineTintColor],
      }),

      borderWidth: focusAnimation.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [activeLineWidth, lineWidth, activeLineWidth],
      }),
    };
  }

  render() {
    const {maxLineWidth} = this.state;
    const {disabled, lineType, disabledLineType, lineContainer} = this.props;

    const borderStyle = disabled ? disabledLineType : lineType;

    if (borderStyle === 'none') {
      return null;
    }

    const [top, right, left] = Array.from(new Array(3), () => -1.5 * maxLineWidth);

    const lineStyle = {
      ...this.borderProps(),

      borderStyle,
      top,
      right,
      left,
    };

    return (
      <View style={[styles.container, lineContainer]} pointerEvents="none">
        <Animated.View style={[styles.line, lineStyle]} />
      </View>
    );
  }
}
