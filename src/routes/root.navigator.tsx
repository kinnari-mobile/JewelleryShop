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
import {PlaceOrder} from '@feature/cart';
import {setUser} from '@store/slice';
import {getUserFromStorage} from '@storage';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '@store/store';
import {AuthRoutes, AuthStackParamList} from './auth.navigator';
import {TabRoutes} from './tab.navigator';

export type RootStackParamList = {
  auth: NavigatorScreenParams<AuthStackParamList>;
  about: undefined;
  tab: undefined;
  placeOrder: undefined;
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
            name="tab"
            component={TabRoutes}
            options={{headerShown: false}}
          />
          <RootStack.Screen
            name="placeOrder"
            component={PlaceOrder}
            options={getHeaderOptions({title:"Order Summary"})}
          />
          </RootStack.Group>
        )}
      </RootStack.Navigator>
    </SafeContainer>
  );
}
