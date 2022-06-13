import {StyleSheet, View, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {GS} from 'utils/globalStyles';
import {COLORS} from 'utils/enums';

export interface ChildrenView {
  children: ReactNode;
  style?: ViewStyle | ViewStyle[];
}

export const ScreenView = ({children}: ChildrenView) => {
  return <View style={styles.screen}>{children}</View>;
};

export const ViewUnderline = ({children, style}: ChildrenView) => {
  return (
    <View style={[styles.viewunderline, GS.marginBottom8, style]}>
      {children}
    </View>
  );
};

export const ViewRow = ({children, style}: ChildrenView) => {
  return <View style={[GS.row, style]}>{children}</View>;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  viewunderline: {
    borderBottomWidth: 1,
    alignSelf: 'flex-start',
    flexDirection: 'row',
  },
});
