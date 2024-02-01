import React, {memo} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import tw from '../../../styles/tailwind';
import moment from 'moment';
import SvgIcon from '../SvgIcon';
import SliderImage from '../SliderImage';
import OptimizedImage from '../OptimizedImage';
import {CommentButton, LikeButton, ShareButton} from '../buttons/Reactions';

interface TimelineCardProps {
  data: {
    image: string;
    name: string;
    username: string;
    post: {
      images: any[];
      caption: string;
    };
    created_at: Date;
  };
}

function TimelineCard({data}: TimelineCardProps): JSX.Element {
  return (
    <View style={tw`flex-1 flex-row items-start w-full mb-5 gap-x-3`}>
      <TouchableOpacity style={tw`w-12`}>
        <OptimizedImage
          url={data.image}
          thumbnailSource={data.image}
          resizeMode="cover"
          style={tw`w-[3rem] h-[3rem] rounded-xl overflow-hidden bg-accent-2`}
        />
      </TouchableOpacity>
      <View style={tw`flex-1 flex-col items-start w-full mt-2 gap-y-3`}>
        <View style={tw`flex-row items-start justify-between w-full`}>
          <View style={tw`flex-col gap-y-1`}>
            <View style={tw`flex-row items-center gap-x-1.5`}>
              <TouchableOpacity>
                <Text style={tw`font-poppins text-xs text-accent-1`}>{data.name}</Text>
              </TouchableOpacity>
              <View style={tw`p-0.5 rounded-full bg-neutral-400`} />
              <Text style={tw`font-poppins text-[9px] text-neutral-400`}>
                {moment(data.created_at).fromNow()}
              </Text>
            </View>
            <Text style={tw`font-poppins text-[10px] text-neutral-400`}>@{data.username}</Text>
          </View>
          <TouchableOpacity
            style={tw`flex-row items-center justify-end p-1 rounded-full bg-accent-1 bg-opacity-30`}>
            <SvgIcon iconName="horizontal-dots" strokeColor="#fff" width={20} height={20} />
          </TouchableOpacity>
        </View>
        <View style={tw`relative flex-1 flex-col items-start w-full gap-y-5`}>
          <Text style={tw`font-poppins text-xs text-accent-1`}>{data.post.caption}</Text>
          <SliderImage images={data.post.images} />
          <View style={tw`flex-row items-center justify-start w-full gap-x-3`}>
            <LikeButton />
            <CommentButton />
            <ShareButton />
          </View>
        </View>
      </View>
    </View>
  );
}

export default memo(TimelineCard);
