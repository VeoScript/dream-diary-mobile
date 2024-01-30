import React from 'react';
import {CachedImage} from '@georstat/react-native-image-cache';

interface OptimizedImageProps {
  url: string;
  thumbnailSource: string;
  resizeMode: 'center' | 'contain' | 'cover' | 'repeat' | 'stretch';
  style: any;
  imageStyle?: any;
}

export default function OptimizedImage({
  url,
  thumbnailSource,
  resizeMode,
  style,
  imageStyle,
}: OptimizedImageProps): JSX.Element {
  return (
    <CachedImage
      source={url}
      thumbnailSource={thumbnailSource}
      resizeMode={resizeMode}
      style={style}
      imageStyle={imageStyle}
    />
  );
}
