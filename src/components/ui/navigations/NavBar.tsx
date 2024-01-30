import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import tw from '../../../styles/tailwind';

import Logo from '../Logo';
import SvgIcon from '../SvgIcon';

export default function NavBar(): JSX.Element {
  return (
    <View
      style={tw`flex-row items-center justify-between w-full px-3 py-5 gap-x-3 border-b border-accent-4 border-opacity-30`}>
      <View style={tw`flex-col items-start gap-y-5`}>
        <Logo />
        <View style={tw`flex-row items-center gap-x-3`}>
          <TouchableOpacity style={tw`px-3 py-1.5 rounded-full bg-accent-1 bg-opacity-30`}>
            <Text style={tw`font-poppins text-xs text-accent-1`}>For you</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`px-3 py-1.5`}>
            <Text style={tw`font-poppins text-xs text-accent-1`}>Following</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={tw`relative`}>
        <TouchableOpacity style={tw`p-1 rounded-xl bg-accent-1 bg-opacity-50`}>
          <Image
            style={tw`w-[3rem] h-[3rem] rounded-xl`}
            resizeMode="cover"
            source={require('../../../assets/images/veo.jpeg')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`absolute -left-6 -bottom-2 flex-row items-center justify-center p-1 rounded-md bg-accent-1 bg-opacity-50`}>
          <View style={tw`px-1.5 py-1 rounded-md bg-accent-1`}>
            <SvgIcon iconName="bell" strokeColor="#333" fill="#333" width={15} height={15} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
