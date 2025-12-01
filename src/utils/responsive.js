import { Dimensions, PixelRatio, Platform } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const scrWidth = Dimensions.get('window').width;
const scrHeight = Dimensions.get('window').height;

const widthPercentageToDP = widthPercent => {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel((scrWidth * elemWidth) / 100);
};

const heightPercentageToDP = heightPercent => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel((scrHeight * elemHeight) / 100);
};

const platformOrientedCode = (androidVal, iOSVal) =>
  Platform.select({ android: androidVal, ios: iOSVal });

// Responsive scale based on screen width
const scale = size => {
  const baseWidth = 375;
  const scaleFactor = scrWidth / baseWidth;
  return size * Math.min(scaleFactor, 2);
};

// Font scale using RFValue
const fontScale = size => {
  return RFValue(size, scrHeight);
};

// Check device type
const isSmallDevice = scrWidth <= 375;
const isMediumDevice = scrWidth > 375 && scrWidth <= 768;
const isLargeDevice = scrWidth > 768;
const isLandscape = scrWidth > scrHeight;

// Platform utilities
const isIOS = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

// Status bar height
const statusBarHeight = platformOrientedCode(56, 44);

export {
  widthPercentageToDP as WP,
  heightPercentageToDP as HP,
  RFValue as RF,
  scrWidth,
  scrHeight,
  platformOrientedCode,
  scale,
  fontScale,
  isSmallDevice,
  isMediumDevice,
  isLargeDevice,
  isLandscape,
  isIOS,
  isAndroid,
  statusBarHeight,
};
