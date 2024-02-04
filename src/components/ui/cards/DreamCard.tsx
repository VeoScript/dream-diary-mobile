import React, {memo} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import tw from '../../../styles/tailwind';
import OptimizedImage from '../OptimizedImage';

import {DreamsProps} from '../../../shared/interfaces';
import {snakeToNormalText} from '../../../helpers/functions/snakeToNormalText';

interface DreamCardProps {
  dream: DreamsProps;
}

function DreamCard({dream}: DreamCardProps) {
  return (
    <View
      style={tw`flex-row items-start w-full p-3 gap-x-3 border-b border-accent-2 border-opacity-30`}>
      <TouchableOpacity>
        <OptimizedImage
          url={dream.image}
          thumbnailSource={dream.image}
          resizeMode="cover"
          style={tw`w-[3rem] h-[3rem] rounded-xl overflow-hidden bg-accent-2`}
        />
      </TouchableOpacity>
      <View style={tw`flex-1 flex-col items-start gap-y-3`}>
        <View style={tw`flex-row items-start justify-between w-full`}>
          <View style={tw`flex-col gap-y-1`}>
            <Text style={tw`font-poppins text-xs text-white`}>{dream.name}</Text>
            <Text style={tw`font-poppins text-[9px] text-neutral-300`}>@{dream.username}</Text>
          </View>
          <View style={tw`px-2 py-1 rounded-full bg-accent-1 bg-opacity-30`}>
            <Text style={tw`font-poppins text-[9px] text-accent-1`}>
              {snakeToNormalText(dream.dream_type)}
            </Text>
          </View>
        </View>
        <Text style={tw`font-poppins text-xs text-white`}>{dream.dream}</Text>
      </View>
    </View>
  );
}

export default memo(DreamCard);
