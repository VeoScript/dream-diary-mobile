import React, {memo} from 'react';
import {FlatList} from 'react-native';

import tw from '../styles/tailwind';

import MainLayout from '../components/layouts/MainLayout';
import NewDreamModal from '../components/ui/modals/NewDreamModal';
import DreamCard from '../components/ui/cards/DreamCard';

import {dreams} from '../shared/mocks/dreams';

export default function DreamScreen(): JSX.Element {
  return (
    <MainLayout>
      <FlatList
        contentContainerStyle={tw`pb-[5rem]`}
        data={dreams}
        renderItem={({item}): JSX.Element => <RenderDreamCard item={item} />}
      />
      <NewDreamModal />
    </MainLayout>
  );
}

const RenderDreamCard = memo(({item}: any) => {
  return <DreamCard dream={item} />;
});
