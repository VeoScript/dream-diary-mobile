import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {ScrollView} from 'react-native-gesture-handler';

import tw from '../styles/tailwind';

import MainLayout from '../components/layouts/MainLayout';
import TimelineCard from '../components/ui/cards/TimelineCard';

import {timeline_data} from '../shared/mocks/timeline';

export default function HomeScreen(): JSX.Element {
  return (
    <MainLayout>
      <FlatList
        contentContainerStyle={tw`p-3 pb-[5rem]`}
        data={timeline_data}
        renderScrollComponent={props => <ScrollView {...props} />}
        renderItem={({item}): JSX.Element => {
          return <TimelineCard data={item} />;
        }}
      />
    </MainLayout>
  );
}
