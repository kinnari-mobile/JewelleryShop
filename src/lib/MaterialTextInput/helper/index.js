/**
 * @format
 */
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Animated} from 'react-native';

import styles from './styles';

export default class Helper extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    error: PropTypes.string,

    disabled: PropTypes.bool,

    style: PropTypes.object,

    baseColor: PropTypes.string,
    errorColor: PropTypes.string,

    focusAnimation: PropTypes.instanceOf(Animated.Value),
  };

  constructor(props) {
    super(props);

    const {error, focusAnimation} = this.props;

    const opacity = focusAnimation.interpolate({
      inputRange: [-1, -0.5, 0],
      outputRange: [1, 0, 1],
      extrapolate: 'clamp',
    });

    this.state = {
      errored: !!error,
      opacity,
    };
  }

  componentDidMount() {
    const {focusAnimation} = this.props;

    this.listener = focusAnimation.addListener(this.onAnimation.bind(this));
  }

  componentWillUnmount() {
    const {focusAnimation} = this.props;

    focusAnimation.removeListener(this.listener);
  }

  onAnimation({value}) {
    if (this.animationValue > -0.5 && value <= -0.5) {
      this.setState({errored: true});
    }

    if (this.animationValue < -0.5 && value >= -0.5) {
      this.setState({errored: false});
    }

    this.animationValue = value;
  }

  render() {
    const {errored, opacity} = this.state;
    const {
      style,
      title,
      error,
      disabled,
      baseColor,
      errorColor,
      testID,
      accessibilityLabel,
    } = this.props;

    const text = errored ? error : title;

    if (text == null) {
      return null;
    }

    const textStyle = {
      opacity,

      color: !disabled && errored ? errorColor : baseColor,
    };

    return (
      <Animated.Text
        style={[styles.text, style, textStyle]}
        testID={testID}
        accessibilityLabel={accessibilityLabel}>
        {text}
      </Animated.Text>
    );
  }
}
