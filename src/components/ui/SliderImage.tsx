import React, {useState} from 'react';
import {View, Dimensions, TouchableOpacity} from 'react-native';

import tw from '../../styles/tailwind';

import Carousel from 'react-native-reanimated-carousel';
import OptimizedImage from './OptimizedImage';

interface SliderImageProps {
  images: any[];
}

export default function SliderImage({images}: SliderImageProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const width = Dimensions.get('window').width;

  return (
    <View style={tw`relative flex-1 overflow-hidden rounded-xl`}>
      <Carousel
        width={width / 1.3}
        height={width / 1.5}
        data={images}
        scrollAnimationDuration={1000}
        onSnapToItem={index => {
          console.log('current index:', index);
          setCurrentIndex(index);
        }}
        renderItem={({index, item}) => (
          <>
            <TouchableOpacity key={index}>
              <OptimizedImage
                url={item}
                thumbnailSource={item}
                resizeMode="cover"
                style={tw`w-[100%] h-[100%]`}
                imageStyle=""
              />
            </TouchableOpacity>
          </>
        )}
      />
      <View style={tw`absolute bottom-2 flex-row items-center justify-center w-full`}>
        <View
          style={tw`flex-row items-center px-2 py-1 gap-x-1 rounded-full bg-black bg-opacity-50`}>
          {images.map((_, currentImageIndex: number) => (
            <View
              key={currentImageIndex}
              style={tw.style(
                currentIndex === currentImageIndex ? 'bg-white p-1.5' : 'bg-neutral-400 p-1',
                'rounded-full',
              )}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
