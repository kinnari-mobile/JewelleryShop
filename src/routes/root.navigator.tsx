/**
 * @format
 */
import React, {useEffect, useState} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {getHeaderOptions, SafeContainer} from '@globals';
import {NavigatorScreenParams} from '@react-navigation/native';
import {useTheme} from '@theme';
import {useUserInfo} from '@hooks';
import {About} from '@feature/app';
import {setUser} from '@store/slice';
import {getUserFromStorage} from '@storage';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@store/store';
import {AuthRoutes, AuthStackParamList} from './auth.navigator';

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>;
  about: undefined;
};

export type RootNavigationType = NativeStackNavigationProp<RootStackParamList>;
const RootStack = createNativeStackNavigator<RootStackParamList>();

export function Routes() {
  const {t} = useTheme();
  const {isLoggedIn} = useUserInfo();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const user = getUserFromStorage();
    console.log('user: ', user);
    if (user !== null) {
      dispatch(setUser(user));
    }
  }, []);

  return (
    <SafeContainer>
      <RootStack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          animationDuration: 300,
        }}>
        {!isLoggedIn ? (
          <RootStack.Group>
            <RootStack.Screen
              name="auth"
              component={AuthRoutes}
              options={{headerShown: false}}
            />
          </RootStack.Group>
        ) : (
          <RootStack.Group>
            <RootStack.Screen
              name="QRGeneration"
              component={About}
              options={getHeaderOptions}
            />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </SafeContainer>
  );
}
