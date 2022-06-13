import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {Consts} from 'utils/consts';
import {normalizeWidth} from 'utils/sizes';
import {RectButton} from 'react-native-gesture-handler';

export type NumberPadProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

const padValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 0, 'b'];

export const NumberPad = ({style}: NumberPadProps) => {
  return (
    <View style={[styles.padContainer, style]}>
      {padValues.map((val, index) => (
        <PadButton key={index} value={val} />
      ))}
    </View>
  );
};

export type PadButtonProps = {
  value: string | number;
};

const PadButton = ({value}: PadButtonProps) => {
  return (
    <RectButton style={styles.padButtonContainer}>
      <View style={styles.padButton}>
        <Text>{value}</Text>
      </View>
    </RectButton>
  );
};

const styles = StyleSheet.create({
  padContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  padButtonContainer: {
    backgroundColor: 'blue',
    width: Consts.windowWidth / 3,
    height: Consts.windowWidth / 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  padButton: {
    width: Consts.windowWidth / 3 - normalizeWidth(8),
    height: Consts.windowWidth / 6 - normalizeWidth(8),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
});
