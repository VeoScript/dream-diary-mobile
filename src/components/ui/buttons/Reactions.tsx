import React, {memo} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import tw from '../../../styles/tailwind';
import SvgIcon from '../SvgIcon';

import {commentModalStore} from '../../../helpers/store/modal';

interface LikeButtonProps {
  like_count: number;
}
interface CommentButtonProps {
  comment_count: number;
}

const LikeButton = memo(function LikeButton({like_count = 0}: LikeButtonProps): JSX.Element {
  return (
    <View style={tw`flex-row items-center gap-x-2`}>
      <TouchableOpacity style={tw`p-1 rounded-full bg-red-400 bg-opacity-50`}>
        <SvgIcon iconName="heart" strokeColor="#fff" fill="#fff" width={15} height={15} />
      </TouchableOpacity>
      {like_count !== 0 && (
        <Text style={tw`font-poppins text-[10px] text-accent-1`}>{like_count}</Text>
      )}
    </View>
  );
});

const CommentButton = memo(function CommentButton({
  comment_count = 0,
}: CommentButtonProps): JSX.Element {
  const {setIsVisible} = commentModalStore();

  return (
    <View style={tw`flex-row items-center gap-x-2`}>
      <TouchableOpacity
        style={tw`p-1 rounded-full bg-white bg-opacity-20`}
        onPress={() => setIsVisible(true)}>
        <SvgIcon iconName="comment" strokeColor="#fff" width={15} height={15} />
      </TouchableOpacity>
      {comment_count !== 0 && (
        <Text style={tw`font-poppins text-[10px] text-accent-1`}>{comment_count}</Text>
      )}
    </View>
  );
});

const ShareButton = memo(function ShareButton(): JSX.Element {
  return (
    <TouchableOpacity style={tw`p-1 rounded-full bg-white bg-opacity-20`}>
      <SvgIcon iconName="share" strokeColor="#fff" width={15} height={15} />
    </TouchableOpacity>
  );
});

export {LikeButton, CommentButton, ShareButton};
