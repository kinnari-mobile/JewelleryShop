/**
 * @format
 */
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Text} from 'react-native';

import styles from './styles';

export default class Counter extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,

    baseColor: PropTypes.string.isRequired,

    style: Text.propTypes.style,

    onPress: PropTypes.func,
  };

  render() {
    const {title, onPress, rightTextStyle, testID, accessibilityLabel} = this.props;

    if (!title) {
      return null;
    }

    return (
      <Text
        onPress={onPress}
        style={[styles.text, rightTextStyle]}
        testID={testID}
        accessibilityLabel={accessibilityLabel}>
        {title}
      </Text>
    );
  }
}
