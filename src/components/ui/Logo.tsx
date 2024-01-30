import React from 'react';
import {View, Text} from 'react-native';

import tw from '../../styles/tailwind';

export default function Logo(): JSX.Element {
  return (
    <View style={tw`flex-row items-center`}>
      <Text style={tw`font-poppins-bold text-xl tracking-tight text-accent-6`}>Dream</Text>
      <Text style={tw`font-poppins-bold text-xl tracking-tight text-accent-1`}>diary</Text>
    </View>
  );
}
