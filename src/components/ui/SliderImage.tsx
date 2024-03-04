/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {View} from 'react-native';
import {ImageSlider} from 'react-native-image-slider-banner';
import {DataType} from 'react-native-image-slider-banner/src';

import tw from '../../styles/tailwind';

import {viewImageModalStore} from '../../helpers/store/modal';

interface SliderImageProps {
  images: string[];
}

function SliderImage({images}: SliderImageProps): JSX.Element {
  const {setIsVisible, setImageIndex, setImages} = viewImageModalStore();

  const transformedImages = images?.map((url: string) => {
    return {img: url};
  });

  return (
    <View style={tw`flex-1 rounded-xl overflow-hidden`}>
      <ImageSlider
        data={transformedImages as DataType[]}
        autoPlay={false}
        preview={false}
        caroselImageStyle={{resizeMode: 'cover'}}
        activeIndicatorStyle={tw`bg-white`}
        inActiveIndicatorStyle={tw`bg-neutral-400`}
        indicatorContainerStyle={tw`absolute bottom-0 p-0.5 rounded-full bg-black bg-opacity-50`}
        onClick={(_, index: number) => {
          setImageIndex(index);
          setImages(images);
          setIsVisible(true);
        }}
      />
    </View>
  );
}

export default memo(SliderImage);
