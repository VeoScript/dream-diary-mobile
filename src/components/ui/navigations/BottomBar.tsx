import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import tw from '../../../styles/tailwind';
import SvgIcon from '../SvgIcon';

import {useRoute} from '@react-navigation/native';
import {navigate} from '../../../config/RootNavigation';

export default function BottomBar(): JSX.Element {
  const {name} = useRoute();

  return (
    <View style={tw`absolute bottom-5 left-3 right-3 z-50 flex-row items-center justify-center`}>
      <View
        style={tw`flex-row items-center justify-between px-2 py-1 gap-x-2 rounded-2xl bg-black bg-opacity-50`}>
        {navigations.map(
          (
            navigation: {icon: string; icon_outline: string; name: string; route: string},
            i: number,
          ) => (
            <Fragment key={i}>
              {name === navigation.route ? (
                <TouchableOpacity
                  style={tw.style('flex-row items-center px-3 py-2 gap-x-1 rounded-xl bg-white')}
                  onPress={() => navigate(navigation.route)}>
                  <SvgIcon
                    iconName={navigation.icon}
                    strokeColor="#333"
                    fill="#333"
                    width={25}
                    height={25}
                  />
                  <Text style={tw`font-poppins-bold text-xs text-accent-0`}>{navigation.name}</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  style={tw`p-3 rounded-2xl`}
                  onPress={() => navigate(navigation.route)}>
                  <SvgIcon
                    iconName={navigation.icon_outline}
                    strokeColor="#fff"
                    width={25}
                    height={25}
                  />
                </TouchableOpacity>
              )}
            </Fragment>
          ),
        )}
      </View>
    </View>
  );
}

const navigations = [
  {
    icon: 'home',
    icon_outline: 'home-outline',
    name: 'Timeline',
    route: 'HomeScreen',
  },
  {
    icon: 'discover',
    icon_outline: 'discover-outline',
    name: 'Trending',
    route: 'TrendingScreen',
  },
  {
    icon: 'message',
    icon_outline: 'message-outline',
    name: 'Message',
    route: 'MessageScreen',
  },
];
