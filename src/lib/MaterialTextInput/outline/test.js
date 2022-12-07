/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/**
 * @format
 */
import React from 'react';
import {Animated} from 'react-native';
import renderer from 'react-test-renderer';

import Outline from '.';

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
  labelAnimation: new Animated.Value(0),
  labelWidth: new Animated.Value(72),

  contentInset: {left: 12, right: 12},
};

it('renders outline', () => {
  const line = renderer.create(<Outline {...props} />).toJSON();

  expect(line).toMatchSnapshot();
});

it('renders disabled outline', () => {
  const line = renderer.create(<Outline {...props} disabled />).toJSON();

  expect(line).toMatchSnapshot();
});

it('renders restricted outline', () => {
  const line = renderer.create(<Outline {...props} restricted />).toJSON();

  expect(line).toMatchSnapshot();
});

it('renders active outline', () => {
  const line = renderer
    .create(<Outline {...props} labelAnimation={new Animated.Value(1)} />)
    .toJSON();

  expect(line).toMatchSnapshot();
});
