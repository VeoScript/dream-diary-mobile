import React from 'react';
import {View, Text} from 'react-native';

import tw from '../styles/tailwind';

import MainLayout from '../components/layouts/MainLayout';

export default function HomeScreen(): JSX.Element {
  return (
    <MainLayout>
      <View>
        <Text style={tw`font-poppins`}>Home Screen</Text>
      </View>
    </MainLayout>
  );
}
