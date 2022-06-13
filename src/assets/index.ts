import {createElement, ReactNode} from 'react';
import {ViewStyle} from 'react-native';
import {COLORS, SVGS} from 'utils/enums';
import {normalizeWidth} from 'utils/sizes';
import HOME from 'assets/svg/home.svg';
import GOOGLE from 'assets/svg/google.svg';
import FACEBOOK from 'assets/svg/fbicon.svg';
import APPLE from 'assets/svg/appleicon.svg';
import X from 'assets/svg/x.svg';
import BACK from 'assets/svg/back.svg';

const SVGS_EXPORT = {
  HOME,
  GOOGLE,
  FACEBOOK,
  APPLE,
  BACK,
  X,
};

export interface GetSvgArgs {
  name: SVGS;
  size?: number | string;
  width?: number;
  height?: number;
  fill?: COLORS;
  style?: ViewStyle;
}

export const getSvgByName = ({
  name,
  size,
  width = normalizeWidth(24),
  height = normalizeWidth(24),
  fill,
  style = {},
}: GetSvgArgs): ReactNode => {
  if (SVGS_EXPORT[name]) {
    return createElement(SVGS_EXPORT[name], {
      width: size || width,
      height: size || height,
      style,
      fill,
    });
  }

  return null;
};
