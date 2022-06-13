import {ButtonOpacity} from 'components/shared/Buttons';
import {useAppNavigation} from 'hooks/commonHooks';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS, STRINGS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import {normalizeHeight, normalizeWidth} from 'utils/sizes';

export const OnlineGameLauncher = () => {
  const {navigate} = useAppNavigation();
  const playWithFriends = () =>
    navigate('AppModal', {type: 'MathSettingsModal'});

  return (
    <ButtonOpacity style={[styles.launcherButton]} onPress={playWithFriends}>
      <Text style={[GS.base60016]}>{STRINGS.PLAY_WITH_FRIENDS}</Text>
    </ButtonOpacity>
  );
};

const styles = StyleSheet.create({
  notConnected: {
    backgroundColor: COLORS.RED,
  },
  launcherButton: {
    backgroundColor: COLORS.YELLOW,
    paddingHorizontal: normalizeWidth(24),
    paddingVertical: normalizeHeight(8),
    borderRadius: normalizeWidth(16),
    marginBottom: normalizeHeight(24),
  },
});
