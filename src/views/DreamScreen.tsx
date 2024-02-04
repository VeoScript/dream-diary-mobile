import React, {memo} from 'react';
import {FlatList} from 'react-native';

import tw from '../styles/tailwind';
import MainLayout from '../components/layouts/MainLayout';

import {dreams} from '../shared/mocks/dreams';
import DreamCard from '../components/ui/cards/DreamCard';

export default function DreamScreen(): JSX.Element {
  return (
    <MainLayout>
      <FlatList
        contentContainerStyle={tw`pb-[5rem]`}
        data={dreams}
        renderItem={({item}): JSX.Element => <RenderDreamCard item={item} />}
      />
    </MainLayout>
  );
}

const RenderDreamCard = memo(({item}: any) => {
  return <DreamCard dream={item} />;
});
