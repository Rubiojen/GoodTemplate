import {Dimensions, PixelRatio, Platform} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const isIos = Platform.OS === 'ios';
const isAndroid = Platform.OS === 'android';

export const Consts = {
  windowWidth,
  windowHeight,
  screenHeight,
  screenWidth,
  isIos,
  isAndroid,
  hitSlop: {top: 20, right: 20, bottom: 20, left: 20},
};

export const GameConst = {
  maxGameTime: 1000,
  oneSecondMs: 1000,
  arcadeDuration: 5,
  defaultDuration: 10,
};

export const Shared = {
  one: PixelRatio.roundToNearestPixel(1),
};
