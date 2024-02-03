import React from 'react';
import {View, Text} from 'react-native';
import {BaseToast, BaseToastProps, ErrorToast} from 'react-native-toast-message';

import tw from '../styles/tailwind';

export const toastConfig = {
  success: (props: BaseToastProps) => (
    <BaseToast
      {...props}
      style={tw`border-l-8 border-green-400 bg-accent-3`}
      contentContainerStyle={tw`px-5 gap-y-1`}
      text1Style={tw`font-poppins text-sm text-accent-1`}
      text2Style={tw`font-poppins text-[9px] text-neutral-300`}
    />
  ),
  error: (props: BaseToastProps) => (
    <ErrorToast
      {...props}
      style={tw`border-l-8 border-red-400 bg-accent-3`}
      contentContainerStyle={tw`px-5 gap-y-1`}
      text1Style={tw`font-poppins text-sm text-accent-1`}
      text2Style={tw`font-poppins text-xs text-neutral-100`}
    />
  ),
  customSuccess: ({text1, text2}: any) => (
    <View style={tw`flex-col items-center w-full px-3`}>
      <View
        style={tw`flex-col items-start w-full p-3 gap-y-1 overflow-hidden rounded-xl border-l-[12px] border-green-400 bg-accent-3`}>
        <Text style={tw`font-poppins-bold text-sm text-accent-1`}>{text1}</Text>
        <Text style={tw`font-poppins text-[9px] text-neutral-300`}>{text2}</Text>
      </View>
    </View>
  ),
  customError: ({text1, text2}: any) => (
    <View style={tw`flex-col items-center w-full px-3`}>
      <View
        style={tw`flex-col items-start w-full p-3 gap-y-1 overflow-hidden rounded-xl border-l-[12px] border-red-400 bg-accent-3`}>
        <Text style={tw`font-poppins-bold text-xs text-accent-1`}>{text1}</Text>
        <Text style={tw`font-poppins text-[9px] text-neutral-300`}>{text2}</Text>
      </View>
    </View>
  ),
};
