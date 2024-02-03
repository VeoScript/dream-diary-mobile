import React, {memo, useCallback, useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, Platform} from 'react-native';

import tw from '../../../styles/tailwind';
import SvgIcon from '../SvgIcon';
import OptimizedImage from '../OptimizedImage';
import Modal from 'react-native-modal';
import Toast from 'react-native-toast-message';
import {CameraPostUpload, PhotoPostUpload} from '../uploads/PostUpload';

import {toastConfig} from '../../../config/ToastConfig';
import {newPostModalStore} from '../../../helpers/store/modal';
import {uploadPostStore} from '../../../helpers/store/upload';

function NewPostModal() {
  const {isVisible, setDefault} = newPostModalStore();
  const {images, setRemoveImage, setDefault: setDefaultImages} = uploadPostStore();

  const [caption, setCaption] = useState<string>('');

  const isDisablePostButton = caption.trim() === '' && images.length < 1;

  const onClose = useCallback(() => {
    setCaption('');
    setDefault();
    setDefaultImages();
  }, [setDefault, setDefaultImages]);

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
        style={tw`absolute bottom-0 flex-col items-start w-full h-[40rem] ios:pb-5 gap-y-1 rounded-t-3xl border-2 border-accent-2 border-opacity-30 bg-accent-3`}>
        <View style={tw`flex-col items-center w-full`}>
          <View style={tw`w-[5rem] h-2 mt-2 rounded-full bg-neutral-400`} />
        </View>
        <ScrollView style={tw`w-full p-3 mb-3`}>
          <View
            style={tw`flex-col items-start w-full py-3 mb-3 gap-y-3 border-b border-accent-2 border-opacity-30`}>
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
                value={caption}
                onChangeText={(value: string) => setCaption(value)}
              />
              <View style={tw`flex-row items-center p-3 gap-x-3`}>
                <CameraPostUpload />
                <PhotoPostUpload />
              </View>
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
          <TouchableOpacity
            style={tw`flex-wrap flex-row items-center justify-center w-full pb-3 gap-3`}
            activeOpacity={100}>
            {images.map((image: {uri: string}, key: number) => (
              <View key={key} style={tw`relative w-[10rem] h-[10rem] overflow-hidden rounded-xl`}>
                <OptimizedImage
                  url={image.uri}
                  thumbnailSource={image.uri}
                  resizeMode="cover"
                  style={tw`w-[100%] h-[100%]`}
                />
                <TouchableOpacity
                  style={tw`absolute top-1 right-1 p-1 rounded-full bg-black bg-opacity-50`}
                  onPress={() => setRemoveImage(key)}>
                  <SvgIcon iconName="x-mark" strokeColor="#fff" width={20} height={20} />
                </TouchableOpacity>
              </View>
            ))}
          </TouchableOpacity>
        </ScrollView>
      </View>
    </Modal>
  );
}

export default memo(NewPostModal);
