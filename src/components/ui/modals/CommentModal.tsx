import React, {memo} from 'react';
import Modal from 'react-native-modal';
import {View, Text} from 'react-native';

import tw from '../../../styles/tailwind';

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
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeComplete={onClose}
      swipeDirection="down"
      backdropOpacity={0}
      style={tw`m-0`}>
      <View
        style={tw`absolute bottom-0 flex-col items-center w-full h-[30rem] gap-y-3 rounded-t-3xl border-2 border-accent-2 bg-accent-3`}>
        <View style={tw`w-[5rem] h-2 mt-2 rounded-full bg-neutral-400`} />
        <View style={tw`flex-col items-center w-full p-3 gap-y-3`}>
          <Text style={tw`font-poppins text-sm text-white`}>Display Comments Here...</Text>
        </View>
      </View>
    </Modal>
  );
}

export default memo(CommentModal);
