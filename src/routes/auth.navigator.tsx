/**
 * @format
 */
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {useTheme} from '@theme';
import {Login} from '@feature/auth';
import {BackButton} from './Headers';
import {getHeaderOptions} from '@globals';

export type AuthStackParamList = {
  Login: undefined;
};

export type AuthNavigationType = NativeStackNavigationProp<AuthStackParamList>;
export type AuthProps = {
  screenOptions: NativeStackNavigationOptions;
};

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

export function AuthRoutes(props: AuthProps) {
  console.log("AuthRoutes");

  const {screenOptions} = props;
  const {t} = useTheme();
  return (
    <AuthStack.Navigator
      screenOptions={{
        ...screenOptions,
        gestureEnabled: !!__DEV__,
      }}>
      <AuthStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
    </AuthStack.Navigator>
  );
}
