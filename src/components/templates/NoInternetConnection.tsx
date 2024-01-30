import React from 'react';
import {View, Text} from 'react-native';

import tw from '../../styles/tailwind';

export default function NoInternetConnection(): JSX.Element {
  return (
    <View style={tw`absolute top-1/2 left-3 right-3 z-50 flex-row items-center justify-center`}>
      <View style={tw`p-4 rounded-xl bg-black bg-opacity-70`}>
        <Text style={tw`font-poppins text-xs text-white`}>
          You are not connected to the internet.
        </Text>
      </View>
    </View>
  );
}
