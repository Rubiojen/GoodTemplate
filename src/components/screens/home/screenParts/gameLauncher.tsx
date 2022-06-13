import {ButtonOpacity} from 'components/shared/Buttons';
import {useAppNavigation} from 'hooks/commonHooks';
import React from 'react';
import {StyleSheet, Text, ViewStyle} from 'react-native';
import {useGameDuration, useGameSetters} from 'utils/atoms/gameAtoms';
import {GameConst} from 'utils/consts';
import {ANSWER_OPTIONS, COLORS, GAMES, GAME_SETTINGS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import {normalizeHeight, normalizeWidth} from 'utils/sizes';

export type GameLauncherProps = {
  gameName: GAMES;
  optionsType: ANSWER_OPTIONS;
  style?: ViewStyle;
  settings: GAME_SETTINGS[];
  showAnswer: boolean;
  isArcade?: boolean;
};

const GameLauncher = ({
  gameName,
  optionsType,
  style = {},
  settings,
  showAnswer,
  isArcade,
}: GameLauncherProps) => {
  const {navigate} = useAppNavigation();
  const {
    setGameName,
    setGameShowAnswer,
    setGameIsArcade,
    setGameDuration,
    setGameOptionsType,
    setGameSettings,
  } = useGameSetters();
  const duration = useGameDuration();

  const openGameSettings = () => {
    navigate('AppModal', {type: 'MathSettingsModal'});
    setGameName(gameName);
    setGameShowAnswer(showAnswer);
    setGameIsArcade(!!isArcade);
    setGameDuration(isArcade ? GameConst.arcadeDuration : duration);
    setGameOptionsType(optionsType);
    setGameSettings(settings);
  };

  return (
    <ButtonOpacity
      style={[styles.launcherButton, style]}
      onPress={openGameSettings}>
      <Text style={[GS.base60016]}>{gameName}</Text>
    </ButtonOpacity>
  );
};

export default GameLauncher;

const styles = StyleSheet.create({
  launcherButton: {
    alignItems: 'center',
    width: normalizeWidth(200),
    backgroundColor: COLORS.YELLOW,
    paddingHorizontal: normalizeWidth(24),
    paddingVertical: normalizeHeight(8),
    borderRadius: normalizeWidth(16),
    marginBottom: normalizeHeight(24),
  },
});
