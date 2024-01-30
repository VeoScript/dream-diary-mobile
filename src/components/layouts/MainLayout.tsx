import React from 'react';
import {SafeAreaView} from 'react-native';

import NavBar from '../templates/NavBar';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({children}: MainLayoutProps): JSX.Element {
  return (
    <SafeAreaView>
      <NavBar />
      {children}
    </SafeAreaView>
  );
}
