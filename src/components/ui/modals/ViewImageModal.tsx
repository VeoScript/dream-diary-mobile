import React, {memo, useCallback} from 'react';
import {View, Text, Platform, TouchableOpacity} from 'react-native';

import tw from '../../../styles/tailwind';
import SvgIcon from '../SvgIcon';
import Modal from 'react-native-modal';
import ImageViewer from 'react-native-image-zoom-viewer';
import OptimizedImage from '../OptimizedImage';

import {viewImageModalStore} from '../../../helpers/store/modal';

function ViewImageModal(): JSX.Element {
  const {imageIndex, images, isVisible, setDefault} = viewImageModalStore();

  const filteredImages = images.map((obj: string) => {
    return {
      url: obj,
      props: {},
    };
  });

  const onClose = useCallback(() => {
    setDefault();
  }, [setDefault]);

  const viewImageHeader = (): JSX.Element => (
    <View
      style={tw.style('absolute z-10 right-3', Platform.OS === 'ios' ? 'top-[70px]' : 'top-20')}>
      <TouchableOpacity onPress={onClose}>
        <SvgIcon iconName="x-mark" strokeColor="#fff" width={20} height={20} />
      </TouchableOpacity>
    </View>
  );

  return (
    <Modal
      statusBarTranslucent
      avoidKeyboard
      isVisible={isVisible}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      onSwipeMove={onClose}
      style={tw`m-0`}>
      <ImageViewer
        saveToLocalByLongPress={false}
        renderHeader={viewImageHeader}
        renderIndicator={(currentIndex, allSize) => indicator(currentIndex, allSize)}
        index={imageIndex}
        imageUrls={filteredImages}
        renderImage={props => (
          <OptimizedImage
            url={props.source.uri}
            thumbnailSource={props.source.uri}
            resizeMode="cover"
            style={tw`w-[100%] h-[100%]`}
          />
        )}
      />
    </Modal>
  );
}

const indicator = (
  currentShowIndex: string | number | undefined,
  total: string | number | undefined,
): JSX.Element => {
  return (
    <View
      style={tw.style(
        'absolute justify-center self-center',
        Platform.OS === 'ios' ? 'top-[70px]' : 'top-20',
      )}>
      <Text style={tw`text-white`}>{`${currentShowIndex} / ${total}`}</Text>
    </View>
  );
};

export default memo(ViewImageModal);
