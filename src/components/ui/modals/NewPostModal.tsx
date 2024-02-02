import React, {memo, useCallback} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import tw from '../../../styles/tailwind';
import SvgIcon from '../SvgIcon';
import Modal from 'react-native-modal';

import {newPostModalStore} from '../../../helpers/store/modal';

function NewPostModal() {
  const {isVisible, setDefault} = newPostModalStore();

  const onClose = useCallback(() => {
    setDefault();
  }, [setDefault]);

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
      style={tw`m-0`}>
      <View
        style={tw`absolute bottom-0 flex-col items-start w-full h-[40rem] ios:pb-5 gap-y-1 rounded-t-3xl border-2 border-accent-2 border-opacity-30 bg-accent-3`}>
        <View style={tw`flex-col items-center w-full`}>
          <View style={tw`w-[5rem] h-2 mt-2 rounded-full bg-neutral-400`} />
        </View>
        <View
          style={tw`flex-col items-start w-full p-3 gap-y-3 border-b border-accent-2 border-opacity-30`}>
          <View style={tw`flex-row items-center justify-start ml-2 w-full gap-x-1`}>
            <Text style={tw`font-poppins text-xs text-accent-1`}>Create New Post</Text>
          </View>
          <View
            style={tw`flex-row items-start w-full overflow-hidden rounded-xl border border-accent-2 border-opacity-30`}>
            <TextInput
              multiline
              style={tw`flex-1 android:p-2 ios:p-3 font-poppins android:text-xs ios:text-sm text-white`}
              placeholder="What's on your mind?"
              placeholderTextColor="#BCF1F0"
            />
            <View style={tw`flex-row items-center p-3 gap-x-3`}>
              <TouchableOpacity>
                <SvgIcon iconName="camera" strokeColor="#fff" width={20} height={20} />
              </TouchableOpacity>
              <TouchableOpacity>
                <SvgIcon iconName="image" strokeColor="#fff" width={20} height={20} />
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity style={tw`default-button`}>
            <Text style={tw`font-poppins text-sm text-accent-1`}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default memo(NewPostModal);
