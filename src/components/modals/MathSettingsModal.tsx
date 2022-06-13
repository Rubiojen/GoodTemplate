import {ButtonOpacity} from 'components/shared/Buttons';
import {GameSettings} from 'components/widgets/GameSettings';
import {useAppNavigation} from 'hooks/commonHooks';
import {useBestScore} from 'hooks/useBestScore';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useGameMode, useGameName} from 'utils/atoms/gameAtoms';
import {COLORS, GAME_SETTINGS, STRINGS} from 'utils/enums';
import {GS} from 'utils/globalStyles';
import {normalizeHeight, normalizeWidth} from 'utils/sizes';
import {ModalWrap} from './ModalWrapper';

const gameSettings = Object.values(GAME_SETTINGS);

export const MathSettingsModal = () => {
  const gameName = useGameName();
  const gameMode = useGameMode();
  const [showModal, setShowModal] = useState(true);
  const {navigate, goBack} = useAppNavigation();

  const startGame = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (!showModal) {
      goBack();
      navigate('MathGamePlay');
    }
  }, [goBack, navigate, showModal]);

  return (
    <ModalWrap
      modalContainerStyle={[GS.justifyStart, styles.modalContainer]}
      style={[styles.gameSettingsModal, !showModal && GS.displayNode]}>
      <Text
        style={[
          GS.base60016,
          styles.modalTitle,
        ]}>{`${gameName} - ${gameMode}`}</Text>
      <MathSettings />
      <BestScore />
      <ButtonOpacity style={styles.startButton} onPress={startGame}>
        <Text style={[GS.base60016]}>{STRINGS.START}</Text>
      </ButtonOpacity>
    </ModalWrap>
  );
};

export const MathSettings = () => {
  return (
    <View style={[styles.opContainer, GS.fullWidth]}>
      {gameSettings.map(setting => (
        <View key={setting} style={[GS.fullWidth, GS.marginBottom8]}>
          <GameSettings settings={setting} />
        </View>
      ))}
    </View>
  );
};

const BestScore = () => {
  const bestScore = useBestScore();
  return (
    <View style={[GS.justifyCenter, GS.marginBottom8]}>
      <Text style={GS.base60016}>Best Score: {bestScore}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    paddingTop: normalizeHeight(100),
  },
  gameSettingsModal: {
    justifyContent: 'flex-start',
    width: normalizeWidth(300),
  },
  modalTitle: {
    paddingTop: normalizeHeight(10),
  },
  startButton: {
    alignItems: 'center',
    marginTop: 'auto',
    paddingVertical: normalizeHeight(8),
    backgroundColor: COLORS.YELLOW,
    paddingHorizontal: normalizeWidth(24),
    marginVertical: normalizeHeight(12),
    borderRadius: normalizeWidth(12),
    width: normalizeWidth(200),
  },
  opContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: normalizeWidth(8),
  },
});
