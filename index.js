/**
 * @format
 */

import {AppRegistry, FlatList, ScrollView, Text, TextInput, TouchableOpacity} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import App from './src/App';
import {name as appName} from './app.json';

import {CacheManager} from '@georstat/react-native-image-cache';
import {Dirs} from 'react-native-file-access';

CacheManager.config = {
  baseDir: `${Dirs.CacheDir}/images_cache/`,
  blurRadius: 15,
  cacheLimit: 0,
  maxRetries: 3 /* optional, if not provided defaults to 0 */,
  retryDelay: 3000 /* in milliseconds, optional, if not provided defaults to 0 */,
  sourceAnimationDuration: 1000,
  thumbnailAnimationDuration: 1000,
};

if (Text.defaultProps == null) {
  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = false;
}

if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
  TextInput.defaultProps.allowFontScaling = false;
  TextInput.defaultProps.autoComplete = 'off';
}

if (TouchableOpacity.defaultProps == null) {
  TouchableOpacity.defaultProps = TouchableOpacity.defaultProps || {};
  TouchableOpacity.defaultProps.activeOpacity = 0.5;
}

if (ScrollView.defaultProps == null) {
  ScrollView.defaultProps = ScrollView.defaultProps || {};
  ScrollView.defaultProps.showsVerticalScrollIndicator = false;
}

if (FlatList.defaultProps == null) {
  FlatList.defaultProps = FlatList.defaultProps || {};
  FlatList.defaultProps.showsVerticalScrollIndicator = false;
}

if (FlashList.defaultProps == null) {
  FlashList.defaultProps = FlashList.defaultProps || {};
  FlatList.defaultProps.showsVerticalScrollIndicator = false;
}

AppRegistry.registerComponent(appName, () => App);
