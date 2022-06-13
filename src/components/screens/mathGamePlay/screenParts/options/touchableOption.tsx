import {Touchable} from 'components/widgets/touchable';
import React from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import {COLORS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import {normalizeHeight, normalizeWidth} from 'utils/sizes';

type TouchableOptionProps = {
  onPress: (option: string) => void;
  value: string;
  style?: ViewStyle;
};

export const TouchableOption = ({
  onPress,
  value,
  style,
}: TouchableOptionProps) => {
  return (
    <Touchable
      onPress={onPress}
      style={[styles.numberTouch, style ? style : {}]}
      value={value}>
      <View style={styles.number}>
        <View style={styles.textWrap}>
          <Text style={[GS.base60024]}>{value}</Text>
        </View>
      </View>
    </Touchable>
  );
};

const styles = StyleSheet.create({
  numPadContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  numberTouch: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '33.33%',
    height: normalizeHeight(100),
  },
  number: {
    width: '100%',
    height: '100%',
    padding: 4,
  },
  textWrap: {
    backgroundColor: COLORS.YELLOW,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: normalizeWidth(12),
    width: '100%',
    height: '100%',
  },
});
