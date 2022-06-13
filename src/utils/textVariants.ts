import {TextStyle} from 'react-native';
import {Consts} from './consts';
import {COLORS} from './enums';
import {normalizeWidth} from './sizes';

export type TextVariantKeys =
  | 'BASE_14_NORMAL'
  | 'BASE_14_BOLD'
  | 'BASE_16_600'
  | 'BASE_24_600';

export type TextVariants = Record<TextVariantKeys, TextStyle>;

const baseTextVariant: TextStyle = {
  fontFamily: Consts.isIos ? 'Courier' : 'monospace',
  fontWeight: 'normal',
  fontSize: normalizeWidth(14),
  textAlign: 'left',
  color: COLORS.BLACK,
};

const TV: TextVariants = {
  BASE_14_NORMAL: baseTextVariant,
  BASE_14_BOLD: {
    ...baseTextVariant,
    fontWeight: 'bold',
  },
  BASE_16_600: {
    ...baseTextVariant,
    fontWeight: '600',
    fontSize: normalizeWidth(16),
  },
  BASE_24_600: {
    ...baseTextVariant,
    fontWeight: '600',
    fontSize: normalizeWidth(24),
  },
};

export default TV;
