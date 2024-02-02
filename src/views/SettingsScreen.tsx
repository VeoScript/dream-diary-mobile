import React from 'react';
import {View, Text} from 'react-native';

import tw from '../styles/tailwind';

import MainLayout from '../components/layouts/MainLayout';

export default function SettingsScreen(): JSX.Element {
  return (
    <MainLayout>
      <View style={tw`flex-1 flex-col items-center justify-center`}>
        <Text style={tw`font-poppins text-white`}>Settings Screen</Text>
      </View>
    </MainLayout>
  );
}
