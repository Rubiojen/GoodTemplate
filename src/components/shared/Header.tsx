import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {normalizeWidth} from 'utils/sizes';
import {RectButton} from 'react-native-gesture-handler';
import {useAppNavigation} from 'hooks/commonHooks';
import {COLORS} from 'utils/enums';

export type ScreenViewProps = {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
};

export const Header = () => {
  const {goBack} = useAppNavigation();
  return (
    <View style={styles.headerContainer}>
      <RectButton onPress={goBack}>
        <Text>Back</Text>
      </RectButton>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: normalizeWidth(8),
    backgroundColor: COLORS.GREEN,
  },
});
