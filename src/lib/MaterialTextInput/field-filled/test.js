/**
 * @format
 */
import {Image} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import FilledTextField from '.';

const props = {
  label: 'test',
};

/* eslint-env jest */

it('renders', () => {
  const field = renderer.create(<FilledTextField {...props} />).toJSON();

  expect(field).toMatchSnapshot();
});

it('renders value', () => {
  const field = renderer.create(<FilledTextField {...props} value="text" />).toJSON();

  expect(field).toMatchSnapshot();
});

it('renders disabled value', () => {
  const field = renderer.create(<FilledTextField {...props} value="text" disabled />).toJSON();

  expect(field).toMatchSnapshot();
});

it('renders title', () => {
  const field = renderer.create(<FilledTextField {...props} title="field" />).toJSON();

  expect(field).toMatchSnapshot();
});

it('renders counter', () => {
  const field = renderer
    .create(<FilledTextField {...props} value="text" characterRestriction={10} />)
    .toJSON();

  expect(field).toMatchSnapshot();
});

it('renders accessory', () => {
  const render = () => <Image />;

  const field = renderer
    .create(<FilledTextField {...props} renderLeftAccessory={render} />)
    .toJSON();

  expect(field).toMatchSnapshot();
});
