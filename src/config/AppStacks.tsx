import React from 'react';

import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {navigationRef} from './RootNavigation';

import {HomeScreen, DreamScreen, SettingsScreen} from '../shared/screens';

type RootStackParams = {
  HomeScreen: undefined;
  DreamScreen: undefined;
  SettingsScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

function AppStacks() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar animated={false} backgroundColor="#1A2C44" barStyle="light-content" />
      <Stack.Navigator screenOptions={{headerShown: false, animation: 'none'}}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DreamScreen" component={DreamScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppStacks;
