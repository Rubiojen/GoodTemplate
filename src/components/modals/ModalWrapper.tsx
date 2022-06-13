import {useAppNavigation} from 'hooks/commonHooks';
import React, {FC} from 'react';
import {
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import {normalizeWidth} from 'utils/sizes';

type ModalWrapProps = {
  shouldCloseOnPressOut?: boolean;
  style?: StyleProp<ViewStyle>;
  modalContainerStyle?: StyleProp<ViewStyle>;
};

export const ModalWrap: FC<ModalWrapProps> = ({
  children,
  shouldCloseOnPressOut = true,
  modalContainerStyle,
  style,
}) => {
  const {top} = useSafeAreaInsets();
  const {goBack} = useAppNavigation();
  return (
    <View
      style={[styles.modalContainer, {marginTop: top}, modalContainerStyle]}>
      <Pressable
        style={[StyleSheet.absoluteFill]}
        onPress={shouldCloseOnPressOut ? goBack : null}
      />
      <Animated.View style={[GS.center, styles.modal, style]}>
        {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignSelfEnd: {alignSelf: 'flex-end'},
  modal: {
    backgroundColor: COLORS.RED,
    opacity: 1,
    minWidth: normalizeWidth(100),
    borderRadius: normalizeWidth(16),
  },
  padding: {padding: normalizeWidth(4)},
});
