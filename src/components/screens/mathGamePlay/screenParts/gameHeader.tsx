import {ArcadeTimer} from 'components/animations/arcadeTimer';
import {Timer} from 'components/animations/timer';
import {useAppNavigation} from 'hooks/commonHooks';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ViewStyle} from 'react-native';
import Animated from 'react-native-reanimated';
import {
  useGameDuration,
  useGameIsArcade,
  useGameScore,
  useGameTaskLimit,
  useSetGameRunning,
} from 'utils/atoms/gameAtoms';
import {GS} from 'utils/globalStyles';

type GameHeaderProps = {
  gameTimeRef: Animated.SharedValue<number>;
  style?: ViewStyle | ViewStyle[];
};

const Score = () => {
  const score = useGameScore();
  const {navigate, goBack} = useAppNavigation();
  const tasksLimit = useGameTaskLimit();
  const duration = useGameDuration();
  const setGameIsRunning = useSetGameRunning();

  useEffect(() => {
    if (tasksLimit && score === tasksLimit) {
      setGameIsRunning(false);
      goBack();
      navigate('AppModal', {type: 'MathSummary'});
    }
  }, [navigate, score, tasksLimit, duration, setGameIsRunning, goBack]);
  return (
    <Text style={[GS.base60024, styles.score]}>{`${score}${
      tasksLimit ? `/${tasksLimit}` : ''
    }`}</Text>
  );
};

export const GameHeader = ({gameTimeRef, style}: GameHeaderProps) => {
  const isArcade = useGameIsArcade();
  return (
    <View
      style={[GS.row, GS.fullWidth, GS.justifyCenter, GS.alignCenter, style]}>
      {isArcade ? (
        <ArcadeTimer gameTimeRef={gameTimeRef} />
      ) : (
        <Timer gameTimeRef={gameTimeRef} />
      )}
      <Score />
    </View>
  );
};

const styles = StyleSheet.create({
  score: {
    position: 'absolute',
    right: 0,
  },
});
