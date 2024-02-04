import React, {memo} from 'react';
import {FlatList} from 'react-native';

import tw from '../styles/tailwind';

import MainLayout from '../components/layouts/MainLayout';
import NewPostModal from '../components/ui/modals/NewPostModal';
import TimelineCard from '../components/ui/cards/TimelineCard';

import {timeline_data} from '../shared/mocks/timeline';

export default function HomeScreen(): JSX.Element {
  return (
    <MainLayout>
      <FlatList
        contentContainerStyle={tw`p-3 pb-[5rem]`}
        data={timeline_data}
        renderItem={({item}): JSX.Element => <RenderTimelineCard item={item} />}
      />
      <NewPostModal />
    </MainLayout>
  );
}

const RenderTimelineCard = memo(({item}: any) => {
  return <TimelineCard data={item} />;
});
