/**
 * @format
 */
import React from 'react';
import {useTheme} from '@theme';
import {MenuProvider} from 'react-native-popup-menu';
import {ThemeProvider} from 'styled-components';
import {Provider as ReduxProvider} from 'react-redux';
import {store} from '@store/store';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();
interface IProps {
  children: React.ReactNode;
}

function Provider({children}: IProps) {
  const {t} = useTheme();
  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={t}>
          <MenuProvider>{children}</MenuProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
}

export {Provider};
