/**
 * @format
 */
import React from 'react';
import { Text } from 'react-native';
import {useTheme} from '@theme';
import {MyCart,Dashboard,Products,Settings} from '@feature/cart';
import {About} from '@feature/app';
import {BackButton} from './Headers';
import {getHeaderOptions} from '@globals';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {DashboardIcon,ProductsIcon,SettingsIcon,SortIcon} from '@icons';

const Tab = createBottomTabNavigator();

export function TabRoutes() {

  const {t} = useTheme();
  return (
    <Tab.Navigator
    screenOptions={{
        headerStyle: { backgroundColor: t.colors.primary },
        headerTintColor: '#fff',
        headerTitleAlign: 'center',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarStyle: {
          height:'10%',
          backgroundColor: t.colors.primary,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          paddingBottom:15},
      }}
      >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: true,
          tabBarLabel: ({ focused }) => (
           <Text style={{color:focused ? t.colors.white : t.colors.grey , fontSize:12}}>Dashboard</Text>
         ),
          tabBarIcon: ({ focused }) => (
            <DashboardIcon color={focused ? t.colors.white : t.colors.grey} height={22} width={22}/>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{

          tabBarLabel: ({ focused }) => (
           <Text style={{color: focused ? t.colors.white : t.colors.grey , fontSize:12}}>Products</Text>
         ),
          tabBarIcon: ({ focused }) => (
            <ProductsIcon color={focused ? t.colors.white : t.colors.grey} height={22} width={22}/>
          ),
        }}
        />
      <Tab.Screen
        name="My Cart"
        component={MyCart}
        options={{
          tabBarLabel: ({ focused }) => (
           <Text style={{color: focused ? t.colors.white : t.colors.grey , fontSize:12}}>Cart</Text>
         ),
          tabBarIcon: ({ focused }) => (
            <SortIcon color={focused ? t.colors.white : t.colors.grey} height={22} width={22}/>
          ),
        }}
      />
      <Tab.Screen
      name="Settings"
      component={Settings}
      options={{
        tabBarLabel: ({ focused }) => (
           <Text style={{color: focused ? t.colors.white : t.colors.grey , fontSize:12}}>Settings</Text>
         ),
        tabBarIcon: ({ focused }) => (
          <SettingsIcon color={focused ? t.colors.white : t.colors.grey} height={22} width={22}/>
        ),
      }}  />
    </Tab.Navigator>
  );
}
