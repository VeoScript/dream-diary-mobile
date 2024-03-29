import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import tw from '../../../styles/tailwind';
import Logo from '../Logo';
import SvgIcon from '../SvgIcon';

import {useRoute} from '@react-navigation/native';
import {dreamFilters} from '../../../shared/constants/dream-filters';
import {newDreamModalStore, newPostModalStore} from '../../../helpers/store/modal';
import {DreamFiltersProps} from '../../../shared/interfaces/constants';

function NavBar(): JSX.Element {
  const {name} = useRoute();

  const {setIsVisible: setIsVisibleNewPost} = newPostModalStore();
  const {isVisible: isVisibleNewDream, setIsVisible: setIsVisibleNewDream} = newDreamModalStore();

  return (
    <View
      style={tw`flex-row items-start justify-between w-full px-3 py-5 gap-x-3 border-b border-accent-2 border-opacity-30`}>
      <View style={tw`flex-1 flex-col items-start gap-y-5`}>
        <Logo />
        {name === 'HomeScreen' && (
          <View style={tw`flex-row items-center gap-x-1`}>
            <TouchableOpacity style={tw`px-3 py-1.5 rounded-full bg-accent-1 bg-opacity-30`}>
              <Text style={tw`font-poppins text-xs text-accent-1`}>For you</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`px-3 py-1.5`}>
              <Text style={tw`font-poppins text-xs text-accent-1`}>Following</Text>
            </TouchableOpacity>
          </View>
        )}
        {name === 'DreamScreen' && (
          <View style={tw`flex-wrap flex-row items-center gap-1`}>
            {dreamFilters.map((filter: DreamFiltersProps, key: number) => (
              <TouchableOpacity
                key={key}
                style={tw`px-3 py-1.5 rounded-full bg-accent-1 bg-opacity-30`}>
                <Text style={tw`font-poppins text-[9px] text-accent-1`}>{filter.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
      <View style={tw`relative ml-5 mt-3`}>
        <TouchableOpacity style={tw`p-1 rounded-xl bg-accent-1 bg-opacity-50`}>
          <Image
            style={tw`w-[3rem] h-[3rem] rounded-xl`}
            resizeMode="cover"
            source={require('../../../assets/images/veo.jpeg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`absolute -left-6 -bottom-2 flex-row items-center justify-center p-1 rounded-md bg-accent-1 bg-opacity-50`}
          onPress={() => {
            switch (name) {
              case 'HomeScreen':
                setIsVisibleNewPost(true);
                break;
              case 'DreamScreen':
                setIsVisibleNewDream(!isVisibleNewDream);
                break;
              default:
                break;
            }
          }}>
          <View style={tw`px-1.5 py-1 rounded-md bg-accent-1`}>
            <SvgIcon iconName="plus" strokeColor="#333" width={15} height={15} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default memo(NavBar);
