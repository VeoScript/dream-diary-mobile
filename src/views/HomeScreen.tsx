import React from 'react';
import {Text, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';

import tw from '../styles/tailwind';

import MainLayout from '../components/layouts/MainLayout';

export default function HomeScreen(): JSX.Element {
  return (
    <MainLayout>
      <FlashList
        contentContainerStyle={tw`p-3`}
        data={data}
        estimatedItemSize={50}
        renderItem={({item}) => {
          return (
            <View>
              <Text style={tw`font-poppins text-white`}>{item.name}</Text>
            </View>
          );
        }}
      />
    </MainLayout>
  );
}

const data = [
  {
    name: 'Jerome Villaruel',
  },
  {
    name: 'Richlyn Hermosilla',
  },
];
