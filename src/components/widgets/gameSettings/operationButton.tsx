import React, {ReactNode} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, ViewStyle} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';
import {COLORS, OPERATIONS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import {normalizeWidth} from 'utils/sizes';

type OperationButtonProps = {
  value: OPERATIONS | number;
  children?: ReactNode;
  isSelected?: boolean;
  onPress: (val: any) => void;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
};

export const OperationButton = ({
  value,
  children,
  isSelected,
  onPress,
  textStyle,
  style,
}: OperationButtonProps) => {
  const press = () => {
    onPress(value);
  };

  return (
    <RectButton
      onPress={press}
      style={[
        styles.optionButton,
        {backgroundColor: isSelected ? COLORS.YELLOW : COLORS.RED},
        style,
      ]}>
      {children || <Text style={[GS.base60016, textStyle]}>{value}</Text>}
    </RectButton>
  );
};

const styles = StyleSheet.create({
  optionButton: {
    marginHorizontal: normalizeWidth(8),
    width: normalizeWidth(24),
    height: normalizeWidth(24),
    borderRadius: normalizeWidth(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
