import {PixelRatio} from 'react-native';
import {Consts} from './consts';

const baseScreenWidth = 414; // iPhone 11 - 414x896
const baseScreenHeight = 896;

export const normalizeWidth = (width: number) => {
  return PixelRatio.roundToNearestPixel(
    width * (Consts.windowWidth / baseScreenWidth),
  );
};

export const normalizeHeight = (height: number) => {
  return PixelRatio.roundToNearestPixel(
    height * (Consts.windowHeight / baseScreenHeight),
  );
};
