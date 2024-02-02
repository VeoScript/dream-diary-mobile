import React, {memo, useCallback, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import SvgIcon from '../SvgIcon';

const CameraPostUpload = memo(function CameraPostUpload() {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleCapturePhoto = useCallback((): void => {
    let options: any = {
      saveToPhotos: false,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    };

    launchCamera(options, async response => {
      setIsGenerating(true);

      if (response.didCancel) {
        setIsGenerating(false);
        return;
      }
      if (response) {
        const image: any = response?.assets;
        console.log('Captured Image', image);
        setIsGenerating(false);
      }
    });
  }, []);
  return (
    <TouchableOpacity disabled={isGenerating} onPress={handleCapturePhoto}>
      <SvgIcon iconName="camera" strokeColor="#fff" width={20} height={20} />
    </TouchableOpacity>
  );
});

const PhotoPostUpload = memo(function PhotoPostUpload() {
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const handleChoosePhoto = useCallback((): void => {
    let options: any = {
      selectionLimit: 5,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, async response => {
      setIsGenerating(true);

      if (response.didCancel) {
        setIsGenerating(false);
        return;
      }
      if (response) {
        const image: any = response?.assets;
        console.log('Captured Image', image[0].uri);
        setIsGenerating(false);
      }
    });
  }, []);

  return (
    <TouchableOpacity disabled={isGenerating} onPress={handleChoosePhoto}>
      <SvgIcon iconName="image" strokeColor="#fff" width={20} height={20} />
    </TouchableOpacity>
  );
});

export {CameraPostUpload, PhotoPostUpload};
