/**
 * @format
 */
import React from 'react';
import { StyleProp, ViewStyle, TextStyle, TextInputProps } from 'react-native';
// import {TextField, FilledTextField, OutlinedTextField} from '@lib/MaterialTextInput';
import { TextField, FilledTextField, OutlinedTextField } from 'react-native-material-textfield'
import { Container } from './styles';

type keyboardType =
  | 'default'
  | 'number-pad'
  | 'decimal-pad'
  | 'numeric'
  | 'email-address'
  | 'phone-pad';

type textInputModeType = 'flat' | 'outlined' | 'filled';

type lineType = 'solid' | 'dotted' | 'dashed' | 'none';
type contentInsetType = {
  top?: number;
  left?: number;
  right?: number;
  label?: number;
  input?: number;
};
type labelOffset = {
  x0?: number;
  x1?: number;
  y0?: number;
  y1?: number;
};

export interface ITextInput extends TextInputProps {
  label?: string;
  keyboardType?: keyboardType;
  mode?: textInputModeType;

  placeholderTextColor?: string;
  textColor?: string;
  fontSize?: number;
  labelFontSize?: number;
  lineWidth?: number;
  activeLineWidth?: number;
  disabledLineWidth?: number;
  tintColor?: string;
  baseColor?: string;
  title?: string;
  prefix?: string;
  suffix?: string;
  error?: string;
  errorColor?: string;
  lineType?: lineType;
  disabledLineType?: lineType;
  animationDuration?: number;
  disabled?: boolean;
  editable?: boolean;
  multiline?: boolean;
  contentInset?: contentInsetType;
  labelOffset?: labelOffset;
  inputContainerStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  labelTextStyle?: StyleProp<TextStyle>;
  titleTextStyle?: StyleProp<TextStyle>;
  affixTextStyle?: StyleProp<TextStyle>;
  bottomRightText?: string;
  bottomLabelStyle?: StyleProp<TextStyle>;
  characterRestriction?: number;
  useNativeDriver?: boolean;

  onPressRightText?: () => void;
  formatText?: () => void;
  renderLeftAccessory?: () => JSX.Element;
  renderRightAccessory?: () => JSX.Element;
  onChangeText?: (value: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

TextInput.defaultProps = {
  label: '',
  keyboardType: 'default',
  mode: 'flat',

  fontSize: 14,
  labelFontSize: 10,
  lineWidth: 1,
  activeLineWidth: 1,
  disabledLineWidth: 1,

  textColor: 'rgba(0, 0, 0, .87)',
  tintColor: 'rgb(0, 145, 234)',
  baseColor: 'rgba(0, 0, 0, .38)',
  placeholderTextColor: '#B0B0B0',

  title: '',
  prefix: null,
  suffix: null,
  error: '',
  errorColor: 'rgb(213, 0, 0)',
  lineType: 'solid',
  disabledLineType: 'solid',
  animationDuration: 500,
  disabled: false,
  editable: true,
  multiline: false,
  contentInset: null,
  labelOffset: null,
  inputContainerStyle: null,
  containerStyle: undefined,
  labelTextStyle: undefined,
  titleTextStyle: undefined,
  affixTextStyle: undefined,
  bottomRightText: '',
  bottomLabelStyle: undefined,

  onPressRightText: undefined,
  formatText: undefined,
  renderLeftAccessory: undefined,
  renderRightAccessory: undefined,
  onChangeText: undefined,
  onFocus: undefined,
  onBlur: undefined,
  characterRestriction: undefined,
  useNativeDriver: false
};

const getTextInputType = (mode: textInputModeType) => {
  switch (mode) {
    case 'flat':
      return TextField;
    case 'outlined':
      return OutlinedTextField;
    case 'filled':
      return FilledTextField;
    default:
      return TextField;
  }
};

function TextInput(props: ITextInput) {
  const { mode = 'flat' } = props;

  const TextInputType = getTextInputType(mode);

  return (
    <Container>
      <TextInputType {...props} />
    </Container>
  );
}

export { TextInput };
