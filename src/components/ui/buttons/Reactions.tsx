import React from 'react';
import {TouchableOpacity} from 'react-native';

import tw from '../../../styles/tailwind';
import SvgIcon from '../SvgIcon';

import {commentModalStore} from '../../../helpers/store/modal';

export function LikeButton(): JSX.Element {
  return (
    <TouchableOpacity style={tw`p-1 rounded-full bg-red-400 bg-opacity-50`}>
      <SvgIcon iconName="heart" strokeColor="#fff" fill="#fff" width={15} height={15} />
    </TouchableOpacity>
  );
}

export function CommentButton(): JSX.Element {
  const {setIsVisible} = commentModalStore();

  return (
    <TouchableOpacity
      style={tw`p-1 rounded-full bg-white bg-opacity-20`}
      onPress={() => setIsVisible(true)}>
      <SvgIcon iconName="comment" strokeColor="#fff" width={15} height={15} />
    </TouchableOpacity>
  );
}

export function ShareButton(): JSX.Element {
  return (
    <TouchableOpacity style={tw`p-1 rounded-full bg-white bg-opacity-20`}>
      <SvgIcon iconName="share" strokeColor="#fff" width={15} height={15} />
    </TouchableOpacity>
  );
}
