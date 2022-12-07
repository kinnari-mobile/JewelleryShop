/**
 * @format
 */
import React from 'react';
import {Provider} from '@provider';
import {ThemeProvider} from '@theme';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from '@routes';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {GlobalLoder, Toast} from '@common';

function App() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <StatusBar hidden />
      <ThemeProvider>
        <Provider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
          <GlobalLoder />
          <Toast />
        </Provider>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export {App};
