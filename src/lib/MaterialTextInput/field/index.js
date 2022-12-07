/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-bitwise */
/**
 * @format
 */
import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {View, Text, TextInput, Animated, StyleSheet, Platform, ViewPropTypes} from 'react-native';
import BottomRightLabel from '../bottomRightLabel';

import Line from '../line';
import Label from '../label';
import Affix from '../affix';
import Helper from '../helper';
import Counter from '../counter';

import styles from './styles';

function startAnimation(animation, options, callback) {
  Animated.timing(animation, options).start(callback);
}

function labelStateFromProps(props, state) {
  const {placeholder, defaultValue} = props;
  const {text, receivedFocus} = state;

  return !!(placeholder || text || (!receivedFocus && defaultValue));
}

function errorStateFromProps(props, state) {
  const {error} = props;

  return !!error;
}

export default class TextField extends PureComponent {
  static defaultProps = {
    underlineColorAndroid: 'transparent',
    disableFullscreenUI: true,
    autoCapitalize: 'sentences',
    editable: true,

    animationDuration: 225,

    fontSize: 16,
    labelFontSize: 12,

    tintColor: 'rgb(0, 145, 234)',
    textColor: 'rgba(0, 0, 0, .87)',
    baseColor: 'rgba(0, 0, 0, .38)',

    errorColor: 'rgb(213, 0, 0)',

    lineWidth: StyleSheet.hairlineWidth,
    activeLineWidth: 2,
    disabledLineWidth: 1,

    lineType: 'solid',
    disabledLineType: 'dotted',

    disabled: false,
  };

  static propTypes = {
    ...TextInput.propTypes,

    animationDuration: PropTypes.number,

    fontSize: PropTypes.number,
    labelFontSize: PropTypes.number,

    contentInset: PropTypes.shape({
      top: PropTypes.number,
      label: PropTypes.number,
      input: PropTypes.number,
      left: PropTypes.number,
      right: PropTypes.number,
      bottom: PropTypes.number,
    }),

    labelOffset: Label.propTypes.offset,

    labelTextStyle: Text.propTypes.style,
    titleTextStyle: Text.propTypes.style,
    affixTextStyle: Text.propTypes.style,

    tintColor: PropTypes.string,
    textColor: PropTypes.string,
    baseColor: PropTypes.string,
    lineColor: PropTypes.string,
    lineTintColor: PropTypes.string,
    disabledLineColor: PropTypes.string,

    label: PropTypes.string,
    title: PropTypes.string,

    characterRestriction: PropTypes.number,
    bottomRightText: PropTypes.string,

    error: PropTypes.any,
    errorColor: PropTypes.string,

    lineWidth: PropTypes.number,
    activeLineWidth: PropTypes.number,
    disabledLineWidth: PropTypes.number,

    lineType: Line.propTypes.lineType,
    disabledLineType: Line.propTypes.lineType,

    disabled: PropTypes.bool,
    onPressRightText: PropTypes.func,

    formatText: PropTypes.func,

    renderLeftAccessory: PropTypes.func,
    renderRightAccessory: PropTypes.func,

    prefix: PropTypes.any,
    suffix: PropTypes.any,

    containerStyle: (ViewPropTypes || View.propTypes).style,
    inputContainerStyle: (ViewPropTypes || View.propTypes).style,
    bottomLabelStyle: (ViewPropTypes || View.propTypes).style,

    testIDHelper: PropTypes.string,
    accessibilityLabelHelper: PropTypes.string,
    testIDRightText: PropTypes.string,
    accessibilityLabelRightText: PropTypes.string,
  };

  static inputContainerStyle = styles.inputContainer;

  static contentInset = {
    top: 16,
    label: 4,
    input: 8,
    left: 0,
    right: 0,
    bottom: 8,
  };

  static labelOffset = {
    x0: 0,
    y0: 0,
    x1: 0,
    y1: 0,
  };

  static getDerivedStateFromProps({error, value}, state) {
    const newState = {};

    /* Keep last received error in state */
    if (error && error !== state.error) {
      newState.error = error;
    }

    if (value && value !== state.error) {
      newState.text = value;
    }

    const hasNewStateUpdates = Object.keys(newState).length > 0;

    if (hasNewStateUpdates) return newState;

    return null;
  }

  constructor(props) {
    super(props);

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onPress = this.focus.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onContentSizeChange = this.onContentSizeChange.bind(this);
    this.onFocusAnimationEnd = this.onFocusAnimationEnd.bind(this);

    this.createGetter('contentInset');
    this.createGetter('labelOffset');

    this.inputRef = React.createRef();
    this.mounted = false;
    this.focused = false;

    const {value: text, error, fontSize} = this.props;

    const labelState = labelStateFromProps(this.props, {text}) ? 1 : 0;
    const focusState = errorStateFromProps(this.props) ? -1 : 0;

    this.state = {
      text,
      error,

      focusAnimation: new Animated.Value(focusState),
      labelAnimation: new Animated.Value(labelState),

      receivedFocus: false,

      height: fontSize * 1.5,
    };
  }

  createGetter(name) {
    this[name] = () => {
      const {[name]: value} = this.props;
      const {[name]: defaultValue} = this.constructor;

      return {...defaultValue, ...value};
    };
  }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(prevProps, prevState) {
    const errorState = errorStateFromProps(this.props);
    const prevErrorState = errorStateFromProps(prevProps);

    if (errorState ^ prevErrorState) {
      this.startFocusAnimation();
    }

    const labelState = labelStateFromProps(this.props, this.state);
    const prevLabelState = labelStateFromProps(prevProps, prevState);

    if (labelState ^ prevLabelState) {
      this.startLabelAnimation();
    }
  }

  startFocusAnimation() {
    const {focusAnimation} = this.state;
    const {animationDuration: duration} = this.props;

    const options = {
      toValue: this.focusState(),
      useNativeDriver: false,
      duration,
    };

    startAnimation(focusAnimation, options, this.onFocusAnimationEnd);
  }

  startLabelAnimation() {
    const {labelAnimation} = this.state;
    const {animationDuration: duration} = this.props;

    const options = {
      toValue: this.labelState(),
      useNativeDriver: true,
      duration,
    };

    startAnimation(labelAnimation, options);
  }

  setNativeProps(props) {
    const {current: input} = this.inputRef;

    input.setNativeProps(props);
  }

  focusState() {
    if (errorStateFromProps(this.props)) {
      return -1;
    }

    return this.focused ? 1 : 0;
  }

  labelState() {
    if (labelStateFromProps(this.props, this.state)) {
      return 1;
    }

    return this.focused ? 1 : 0;
  }

  focus() {
    const {disabled, editable} = this.props;
    const {current: input} = this.inputRef;

    if (!disabled && editable) {
      input.focus();
    }
  }

  blur() {
    const {current: input} = this.inputRef;

    input.blur();
  }

  clear() {
    const {current: input} = this.inputRef;

    input.clear();

    /* onChangeText is not triggered by .clear() */
    this.onChangeText('');
  }

  value() {
    const {text} = this.state;
    const {defaultValue} = this.props;

    const value = this.isDefaultVisible() ? defaultValue : text;

    if (value === null) {
      return '';
    }

    return typeof value === 'string' ? value : String(value);
  }

  setValue(text) {
    this.setState({text});
  }

  isFocused() {
    const {current: input} = this.inputRef;

    return input.isFocused();
  }

  isRestricted() {
    const {characterRestriction: limit} = this.props;
    const {length: count} = this.value();

    return limit < count;
  }

  isErrored() {
    return errorStateFromProps(this.props);
  }

  isDefaultVisible() {
    const {text, receivedFocus} = this.state;
    const {defaultValue} = this.props;

    return !receivedFocus && text == null && defaultValue != null;
  }

  isPlaceholderVisible() {
    const {placeholder} = this.props;

    return placeholder && !this.focused && !this.value();
  }

  isLabelActive() {
    return this.labelState() === 1;
  }

  onFocus(event) {
    const {onFocus, clearTextOnFocus} = this.props;
    const {receivedFocus} = this.state;

    if (typeof onFocus === 'function') {
      onFocus(event);
    }

    if (clearTextOnFocus) {
      this.clear();
    }

    this.focused = true;

    this.startFocusAnimation();
    this.startLabelAnimation();

    if (!receivedFocus) {
      this.setState({receivedFocus: true, text: this.value()});
    }
  }

  onBlur(event) {
    const {onBlur} = this.props;

    if (typeof onBlur === 'function') {
      onBlur(event);
    }

    this.focused = false;

    this.startFocusAnimation();
    this.startLabelAnimation();
  }

  onChange(event) {
    const {onChange} = this.props;

    if (typeof onChange === 'function') {
      onChange(event);
    }
  }

  onChangeText(text) {
    const {onChangeText, formatText} = this.props;

    if (typeof formatText === 'function') {
      text = formatText(text);
    }

    this.setState({text});

    if (typeof onChangeText === 'function') {
      onChangeText(text);
    }
  }

  onContentSizeChange(event) {
    const {onContentSizeChange, fontSize} = this.props;
    const {height} = event.nativeEvent.contentSize;

    if (typeof onContentSizeChange === 'function') {
      onContentSizeChange(event);
    }

    this.setState({
      height: Math.max(fontSize * 1.5, Math.ceil(height) + Platform.select({ios: 4, android: 1})),
    });
  }

  onFocusAnimationEnd() {
    const {error} = this.props;
    const {error: retainedError} = this.state;

    if (this.mounted && !error && retainedError) {
      this.setState({error: null});
    }
  }

  inputHeight() {
    const {height: computedHeight} = this.state;
    const {multiline, fontSize, height = computedHeight} = this.props;

    return multiline ? height : fontSize * 1.5;
  }

  inputContainerHeight() {
    const {labelFontSize, multiline} = this.props;
    const contentInset = this.contentInset();

    if (Platform.OS === 'web' && multiline) {
      return 'auto';
    }

    return (
      contentInset.top +
      labelFontSize +
      contentInset.label +
      this.inputHeight() +
      contentInset.input
    );
  }

  inputProps() {
    const store = {};

    for (const key in TextInput.propTypes) {
      if (key === 'defaultValue') {
        continue;
      }

      if (key in this.props) {
        store[key] = this.props[key];
      }
    }

    return store;
  }

  inputStyle() {
    const {fontSize, baseColor, textColor, disabled, multiline} = this.props;

    const color = disabled || this.isDefaultVisible() ? baseColor : textColor;

    const style = {
      fontSize,
      color,

      height: this.inputHeight(),
    };

    if (multiline) {
      const lineHeight = fontSize * 1.5;
      const offset = Platform.OS === 'ios' ? 2 : 0;

      style.height += lineHeight;
      style.transform = [
        {
          translateY: lineHeight + offset,
        },
      ];
    }

    return style;
  }

  renderLabel(props) {
    const offset = this.labelOffset();

    const {label, fontSize, labelFontSize, labelTextStyle, labelColor} = this.props;

    return (
      <Label
        {...props}
        labelColor={labelColor}
        fontSize={fontSize}
        activeFontSize={labelFontSize}
        offset={offset}
        label={label}
        style={labelTextStyle}
      />
    );
  }

  renderLine(props) {
    return <Line {...props} />;
  }

  renderAccessory(prop) {
    const {[prop]: renderAccessory} = this.props;

    return typeof renderAccessory === 'function' ? renderAccessory() : null;
  }

  renderAffix(type) {
    const {labelAnimation} = this.state;
    const {[type]: affix, fontSize, baseColor: color, affixTextStyle: style} = this.props;

    if (affix == null) {
      return null;
    }

    const props = {
      type,
      style,
      color,
      fontSize,
      labelAnimation,
    };

    return <Affix {...props}>{affix}</Affix>;
  }

  renderHelper() {
    const {focusAnimation, error} = this.state;

    const {
      title,
      disabled,
      baseColor,
      errorColor,
      titleTextStyle: style,
      rightTextStyle,
      characterRestriction: limit,
      bottomRightText: rightTitle,
      onPressRightText: onPress,
      bottomLabelStyle,
      lineContainer,
      testIDHelper,
      testIDRightText,
      accessibilityLabelHelper,
      accessibilityLabelRightText,
    } = this.props;

    const {length: count} = this.value();
    const contentInset = this.contentInset();

    const containerStyle = {
      paddingLeft: contentInset.left,
      paddingRight: contentInset.right,
      minHeight: contentInset.bottom,
    };

    const styleProps = {
      style,
      baseColor,
      errorColor,
    };

    const counterProps = {
      ...styleProps,
      limit,
      count,
    };

    const helperProps = {
      ...styleProps,
      title,
      error,
      disabled,
      focusAnimation,
      testID: testIDHelper,
      accessibilityLabel: accessibilityLabelHelper,
    };

    const bottomRightProps = {
      ...styleProps,
      onPress,
      title: rightTitle,
      rightTextStyle: {...style, ...rightTextStyle},
      testID: testIDRightText,
      accessibilityLabel: accessibilityLabelRightText,
    };

    return (
      <View style={[styles.helperContainer, containerStyle, bottomLabelStyle, lineContainer]}>
        {!!title || (!!error && <Helper {...helperProps} />)}
        {!!count && <Counter {...counterProps} />}
        {!!rightTitle && <BottomRightLabel {...bottomRightProps} />}
      </View>
    );
  }

  renderInput() {
    const {disabled, editable, tintColor, style: inputStyleOverrides} = this.props;

    const props = this.inputProps();
    const inputStyle = this.inputStyle();

    return (
      <TextInput
        selectionColor={tintColor}
        {...props}
        style={[styles.input, inputStyle, inputStyleOverrides]}
        editable={!disabled && editable}
        onChange={this.onChange}
        onChangeText={this.onChangeText}
        onContentSizeChange={this.onContentSizeChange}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        value={this.value()}
        ref={this.inputRef}
      />
    );
  }

  render() {
    const {labelAnimation, focusAnimation} = this.state;
    const {
      editable,
      disabled,
      lineType,
      disabledLineType,
      lineWidth,
      lineColor,
      lineTintColor,
      disabledLineColor,
      activeLineWidth,
      disabledLineWidth,
      tintColor,
      baseColor,
      errorColor,
      containerStyle,
      inputContainerStyle: inputContainerStyleOverrides,
      lineContainer,
      outerPrefix,
      outerContainer,
      labelColor,
      allowFontScaling,
    } = this.props;

    const restricted = this.isRestricted();
    const contentInset = this.contentInset();

    const inputContainerStyle = {
      paddingTop: contentInset.top,
      paddingRight: contentInset.right,
      paddingBottom: contentInset.input,
      paddingLeft: contentInset.left,
      height: this.inputContainerHeight(),
    };

    const containerProps = {
      style: containerStyle,
      onStartShouldSetResponder: () => true,
      onResponderRelease: this.onPress,
      pointerEvents: !disabled && editable ? 'auto' : 'none',
    };

    const inputContainerProps = {
      style: [
        this.constructor.inputContainerStyle,
        inputContainerStyle,
        inputContainerStyleOverrides,
      ],
    };

    const styleProps = {
      disabled,
      restricted,
      baseColor,
      tintColor,
      errorColor,
      labelColor,
      allowFontScaling,
      contentInset,

      focusAnimation,
      labelAnimation,
    };

    const lineProps = {
      ...styleProps,

      lineWidth,
      lineColor,
      lineTintColor,
      disabledLineColor,
      activeLineWidth,
      disabledLineWidth,

      lineType,
      disabledLineType,
      lineContainer,
    };

    return (
      <View {...containerProps}>
        <Animated.View {...inputContainerProps}>
          {this.renderLine(lineProps)}
          {this.renderAccessory('renderLeftAccessory')}

          <View style={styles.stack}>
            {this.renderLabel(styleProps)}

            <View style={styles.row}>
              <View style={{flexDirection: 'row'}}>
                <View style={{...outerContainer}}>{outerPrefix}</View>
                {this.renderAffix('prefix')}
                {this.renderInput()}
                {this.renderAffix('suffix')}
              </View>
            </View>
          </View>

          {this.renderAccessory('renderRightAccessory')}
        </Animated.View>

        {this.renderHelper()}
      </View>
    );
  }
}
