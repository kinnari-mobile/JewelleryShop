/**
 * @format
 */
import 'react-native';
import React from 'react';
import {Animated} from 'react-native';
import renderer from 'react-test-renderer';

import Label from '.';

/* eslint-env jest */

const props = {
  fontSize: 16,
  activeFontSize: 12,

  contentInset: {label: 4},

  baseColor: 'black',
  tintColor: 'blue',
  errorColor: 'red',

  offset: {x0: 0, y0: 0, x1: 0, y1: 0},

  focusAnimation: new Animated.Value(0),
  labelAnimation: new Animated.Value(0),
  label: 'test',
};

it('renders label', () => {
  const label = renderer.create(<Label {...props} />);

  expect(label.toJSON()).toMatchSnapshot();
});

it('renders empty label', () => {
  const label = renderer.create(<Label {...props} label={null} />);

  expect(label.toJSON()).toMatchSnapshot();
});

it('renders active label', () => {
  const label = renderer.create(<Label {...props} labelAnimation={new Animated.Value(1)} />);

  expect(label.toJSON()).toMatchSnapshot();
});

it('renders active focused label', () => {
  const label = renderer.create(
    <Label
      {...props}
      labelAnimation={new Animated.Value(1)}
      focusAnimation={new Animated.Value(1)}
    />,
  );

  expect(label.toJSON()).toMatchSnapshot();
});

it('renders errored label', () => {
  const label = renderer.create(
    <Label
      {...props}
      labelAnimation={new Animated.Value(0)}
      focusAnimation={new Animated.Value(-1)}
    />,
  );

  expect(label.toJSON()).toMatchSnapshot();
});

it('renders active errored label', () => {
  const label = renderer.create(
    <Label
      {...props}
      labelAnimation={new Animated.Value(1)}
      focusAnimation={new Animated.Value(-1)}
    />,
  );

  expect(label.toJSON()).toMatchSnapshot();
});

it('renders restricted label', () => {
  const label = renderer.create(<Label restricted {...props} />);

  expect(label.toJSON()).toMatchSnapshot();
});

it('renders styled label', () => {
  const style = {textTransform: 'uppercase'};
  const label = renderer.create(<Label style={style} {...props} />);

  expect(label.toJSON()).toMatchSnapshot();
});
