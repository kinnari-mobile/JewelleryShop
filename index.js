/**
 * @format
 */

import { AppRegistry, Text, TextInput, TouchableOpacity } from 'react-native';
import { App } from './src/App';
import { name as appName } from './app.json';

if (TouchableOpacity.defaultProps == null) {
  TouchableOpacity.defaultProps = {};
  TouchableOpacity.defaultProps.activeOpacity = 0.7;
}

if (Text.defaultProps == null) {
  Text.defaultProps = {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
}

AppRegistry.registerComponent(appName, () => App);
