import React, {memo, useCallback, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Platform} from 'react-native';

import tw from '../../../styles/tailwind';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';

import {toastConfig} from '../../../config/ToastConfig';
import {newDreamModalStore} from '../../../helpers/store/modal';

function NewDreamModal() {
  const {isVisible, setDefault} = newDreamModalStore();

  const [caption, setCaption] = useState<string>('');

  const isDisablePostButton = caption.trim() === '';

  const onClose = useCallback(() => {
    setCaption('');
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
      <Toast config={toastConfig} topOffset={Platform.OS === 'ios' ? 70 : 50} />
      <View
        style={tw`absolute bottom-0 flex-col items-start w-full h-1/2 ios:pb-5 gap-y-1 rounded-t-3xl border-2 border-accent-2 border-opacity-30 bg-accent-3`}>
        <View style={tw`flex-col items-center w-full`}>
          <View style={tw`w-[5rem] h-2 mt-2 rounded-full bg-neutral-400`} />
        </View>
        <ScrollView style={tw`w-full p-3 mb-3`}>
          <View
            style={tw`flex-col items-start w-full py-3 mb-3 gap-y-3 border-b border-accent-2 border-opacity-30`}>
            <View style={tw`flex-row items-center justify-start ml-2 w-full gap-x-1`}>
              <Text style={tw`font-poppins text-xs text-accent-1`}>State your dream</Text>
            </View>
            <View
              style={tw`flex-row items-start w-full overflow-hidden rounded-xl border border-accent-2 border-opacity-30`}>
              <TextInput
                multiline
                style={tw`flex-1 android:p-2 ios:p-3 font-poppins android:text-xs ios:text-sm text-white`}
                placeholder="What's your dream?"
                placeholderTextColor="#BCF1F0"
                value={caption}
                onChangeText={(value: string) => setCaption(value)}
              />
            </View>
            <TouchableOpacity
              disabled={isDisablePostButton}
              style={tw.style(
                isDisablePostButton ? 'opacity-50' : 'opacity-100',
                'default-button',
              )}>
              <Text style={tw`font-poppins text-sm text-accent-1`}>Post</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default memo(NewDreamModal);
