import {StyleSheet} from 'react-native';
import {normalizeHeight} from './sizes';
import TV from './textVariants';

export const GS = StyleSheet.create({
  fullWidth: {
    width: '100%',
  },
  row: {
    flexDirection: 'row',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  displayNode: {
    display: 'none',
  },
  flexOne: {
    flex: 1,
  },
  justifyStart: {
    justifyContent: 'flex-start',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
  alignSelfStart: {
    alignSelf: 'flex-start',
  },
  alignCenter: {
    alignItems: 'center',
  },
  alignStart: {
    alignItems: 'flex-start',
  },
  // Margin
  marginTopAuto: {
    marginTop: 'auto',
  },
  marginBottom8: {
    marginBottom: normalizeHeight(8),
  },
  // texts
  base60016: {
    ...TV.BASE_16_600,
  },
  base60024: {
    ...TV.BASE_24_600,
  },
  baseNormal14: {
    ...TV.BASE_14_NORMAL,
  },
  baseBold14: {
    ...TV.BASE_14_BOLD,
  },
  base600100: {
    ...TV.BASE_24_600,
    fontSize: 100,
  },
});
