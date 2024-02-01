import React, {memo} from 'react';
import Modal from 'react-native-modal';
import {View, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';

import tw from '../../../styles/tailwind';
import SvgIcon from '../SvgIcon';
import OptimizedImage from '../OptimizedImage';

import {comments} from '../../../shared/mocks/comments';
import {commentModalStore} from '../../../helpers/store/modal';

function CommentModal() {
  const {isVisible, setDefault} = commentModalStore();

  const onClose = () => {
    setDefault();
  };

  return (
    <Modal
      statusBarTranslucent
      avoidKeyboard
      propagateSwipe
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      backdropOpacity={0}
      style={tw`m-0`}>
      <View
        style={tw`absolute bottom-0 flex-col items-start w-full h-[30rem] ios:pb-5 gap-y-1 rounded-t-3xl border-2 border-accent-2 border-opacity-30 bg-accent-3`}>
        <View style={tw`flex-col items-center w-full`}>
          <View style={tw`w-[5rem] h-2 mt-2 rounded-full bg-neutral-400`} />
        </View>
        <View
          style={tw`flex-col items-start w-full p-3 gap-y-3 border-b border-accent-2 border-opacity-30`}>
          <View style={tw`flex-row items-center justify-start ml-1 w-full gap-x-1`}>
            <Text style={tw`font-poppins text-xs text-accent-1`}>Comments</Text>
            <Text style={tw`font-poppins-bold text-xs text-accent-1`}>(20)</Text>
          </View>
          <View
            style={tw`flex-row items-center w-full overflow-hidden rounded-xl border border-accent-2 border-opacity-30`}>
            <TextInput
              style={tw`flex-1 android:p-2 ios:p-3 font-poppins android:text-xs ios:text-sm text-white`}
              placeholder="Enter your comment..."
              placeholderTextColor="#BCF1F0"
            />
            <TouchableOpacity style={tw`p-3`}>
              <SvgIcon iconName="share" strokeColor="#fff" width={20} height={20} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={comments}
          style={tw`w-full`}
          renderItem={({item}) => {
            return (
              <TouchableOpacity style={tw`flex-row items-start gap-x-3 p-3`} activeOpacity={100}>
                <TouchableOpacity>
                  <OptimizedImage
                    url={item.image}
                    thumbnailSource={item.image}
                    resizeMode="cover"
                    style={tw`w-[3rem] h-[3rem] rounded-xl overflow-hidden bg-accent-2`}
                  />
                </TouchableOpacity>
                <View style={tw`flex-col items-start flex-1 gap-y-1 overflow-hidden`}>
                  <TouchableOpacity>
                    <Text style={tw`font-poppins-bold text-xs text-accent-1`}>{item.name}</Text>
                  </TouchableOpacity>
                  <Text style={tw`font-poppins text-[10px] text-neutral-400`}>
                    @{item.username}
                  </Text>
                  <View style={tw`flex-col items-start gap-y-2`}>
                    <Text style={tw`font-poppins text-xs text-white`}>{item.comment}</Text>
                    {item.like_by_user && (
                      <View style={tw`flex-row items-center w-full gap-x-1`}>
                        <SvgIcon
                          customStyle={tw`-mt-0.5`}
                          iconName="heart"
                          strokeColor="#64ACCD"
                          fill="#64ACCD"
                          width={10}
                          height={10}
                        />
                        <Text
                          style={tw`font-poppins-light android:text-[9px] ios:text-[10px] text-accent-7`}>
                          User liked this comment.
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </Modal>
  );
}

export default memo(CommentModal);
