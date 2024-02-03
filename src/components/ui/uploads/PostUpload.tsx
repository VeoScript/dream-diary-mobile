import React, {memo, useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import SvgIcon from '../SvgIcon';
import Toast from 'react-native-toast-message';

import {uploadPostStore} from '../../../helpers/store/upload';

const CameraPostUpload = memo(function CameraPostUpload() {
  const {images, setImages} = uploadPostStore();

  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleCapturePhoto = useCallback((): void => {
    let options: any = {
      saveToPhotos: false,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    };

    if (images.length < 5) {
      launchCamera(options, async response => {
        setIsGenerating(true);

        if (response.didCancel) {
          setIsGenerating(false);
          return;
        }
        if (response) {
          const initialImage: any = response?.assets;
          setImages(initialImage);
          setIsGenerating(false);
        }
      });
    } else {
      Toast.show({
        type: 'customError',
        text1: 'Create new post',
        text2: 'Only 5 images can be upload.',
      });
    }
  }, [images.length, setImages]);

  return (
    <TouchableOpacity disabled={isGenerating} onPress={handleCapturePhoto}>
      <SvgIcon iconName="camera" strokeColor="#fff" width={20} height={20} />
    </TouchableOpacity>
  );
});

const PhotoPostUpload = memo(function PhotoPostUpload() {
  const {images, setImages} = uploadPostStore();

  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleChoosePhoto = useCallback((): void => {
    let options: any = {
      selectionLimit: images.length < 5 ? 5 - images.length : 5,
      mediaType: 'photo',
      includeBase64: false,
    };

    if (images.length < 5) {
      launchImageLibrary(options, async response => {
        setIsGenerating(true);

        if (response.didCancel) {
          setIsGenerating(false);
          return;
        }
        if (response) {
          const initialImages: any = response?.assets;
          setImages(initialImages);
          setIsGenerating(false);
        }
      });
    } else {
      Toast.show({
        type: 'customError',
        text1: 'Create new post',
        text2: 'Only 5 images can be upload.',
      });
    }
  }, [images.length, setImages]);

  return (
    <TouchableOpacity disabled={isGenerating} onPress={handleChoosePhoto}>
      <SvgIcon iconName="image" strokeColor="#fff" width={20} height={20} />
    </TouchableOpacity>
  );
});

export {CameraPostUpload, PhotoPostUpload};
