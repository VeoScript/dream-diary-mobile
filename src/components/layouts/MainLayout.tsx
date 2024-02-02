import React, {memo} from 'react';
import {SafeAreaView} from 'react-native';

import tw from '../../styles/tailwind';

import NavBar from '../ui/navigations/NavBar';
import BottomBar from '../ui/navigations/BottomBar';
import NewPostModal from '../ui/modals/NewPostModal';
import ViewImageModal from '../ui/modals/ViewImageModal';
import CommentModal from '../ui/modals/CommentModal';

import {useRoute} from '@react-navigation/native';

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({children}: MainLayoutProps): JSX.Element {
  const {name} = useRoute();

  return (
    <SafeAreaView style={tw`relative flex-1 bg-accent-3`}>
      {name === 'HomeScreen' && <NavBar />}
      {children}
      <BottomBar />
      <NewPostModal />
      <ViewImageModal />
      <CommentModal />
    </SafeAreaView>
  );
}

export default memo(MainLayout);
