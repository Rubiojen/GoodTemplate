import React, {FC, ReactNode} from 'react';
import {GestureResponderEvent, StyleProp, ViewStyle} from 'react-native';
import {TouchableOpacity} from 'react-native';
import {BorderlessButton} from 'react-native-gesture-handler';

type ButtonOpacityProps = {
  style?: StyleProp<ViewStyle>;
  onPress: (e: GestureResponderEvent) => void;
  children: ReactNode;
  activeOpacity?: number;
  disabled?: boolean;
};

type ButtonBorderlessProps = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
};

export const ButtonOpacity = ({
  onPress,
  style = {},
  children,
  disabled = false,
}: ButtonOpacityProps) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[style]}
      testID="ButtonOpacity">
      {children}
    </TouchableOpacity>
  );
};

export const ButtonBorderless: FC<ButtonBorderlessProps> = ({
  onPress = () => null,
  style = {},
  children,
}) => {
  return (
    <BorderlessButton style={[style]} onPress={onPress}>
      {children}
    </BorderlessButton>
  );
};
