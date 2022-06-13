import CheckBox from '@react-native-community/checkbox';
import React from 'react';

export type CheckBoxProps = {
  isChecked: boolean;
  onPress: () => void;
  title: string;
};

export const CustomCheckBox = ({isChecked, onPress}: CheckBoxProps) => {
  return (
    <CheckBox disabled={false} value={isChecked} onValueChange={onPress} />
  );
};
