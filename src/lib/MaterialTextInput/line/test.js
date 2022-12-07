/**
 * @format
 */
import 'react-native';
import React from 'react';
import {Animated} from 'react-native';
import renderer from 'react-test-renderer';

import Line from '.';

/* eslint-env jest */

const props = {
  disabled: false,
  restricted: false,

  baseColor: 'black',
  tintColor: 'blue',
  errorColor: 'red',

  lineWidth: 0.5,
  activeLineWidth: 2,
  disabledLineWidth: 1,

  focusAnimation: new Animated.Value(0),
};

it('renders line', () => {
  const line = renderer.create(<Line {...props} />).toJSON();

  expect(line).toMatchSnapshot();
});

it('renders disabled line', () => {
  const line = renderer.create(<Line {...props} disabled />).toJSON();

  expect(line).toMatchSnapshot();
});

it('renders restricted line', () => {
  const line = renderer.create(<Line {...props} restricted />).toJSON();

  expect(line).toMatchSnapshot();
});

it('renders active line', () => {
  const line = renderer.create(<Line {...props} focusAnimation={new Animated.Value(1)} />).toJSON();

  expect(line).toMatchSnapshot();
});
