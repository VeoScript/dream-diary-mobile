import React from 'react';
import AppStacks from './config/AppStacks';

import tw from './styles/tailwind';

import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={tw`flex-1`}>
      <AppStacks />
    </GestureHandlerRootView>
  );
}
