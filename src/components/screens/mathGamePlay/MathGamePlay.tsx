import {StyleSheet, View} from 'react-native';
import {NumberLoader} from 'components/animations/numberLoader';
import React from 'react';
import {AppHeader} from 'components/shared/AppHeader';
import {GameHeader} from './screenParts/gameHeader';
import {GS} from 'utils/globalStyles';
import {GameContent} from './screenParts/gameContent';
import {normalizeHeight} from 'utils/sizes';
import {useSharedValue} from 'react-native-reanimated';
import {
  useGameDuration,
  useGameLoading,
  useGameMathOperations,
  useGameName,
  useGameRunning,
  useGameSetters,
  useGameTaskLimit,
} from 'utils/atoms/gameAtoms';
import {getProblemAndAnswerArr} from 'utils/logic';
import {useEffectPartialDeps, useMount} from 'hooks/commonHooks';

export const MathGamePlay = () => {
  const gameTime = useSharedValue(0);
  const gameName = useGameName();
  const operations = useGameMathOperations();
  const tasksLimit = useGameTaskLimit();
  const duration = useGameDuration();
  const isGameRunning = useGameRunning();
  const isGameLoading = useGameLoading();
  const {
    setGameLoading,
    setGameRunning,
    setGameScore,
    setGameProblems,
    setGameAnswers,
    setGameProblemIndex,
    setGameAnswerOptions,
    setGameName,
    setGameSummary,
    setGameMathOperations,
    setGameTaskLimit,
  } = useGameSetters();

  const startGame = () => {
    setGameLoading(false);
    setGameRunning(true);
  };

  useEffectPartialDeps(() => {
    if (isGameLoading) {
      const {options, problemArr, answerArr} = getProblemAndAnswerArr(
        gameName,
        operations,
        tasksLimit ? tasksLimit : duration * 2,
      );
      setGameProblems(problemArr);
      setGameProblemIndex(0);
      setGameRunning(false);
      setGameScore(0);
      setGameAnswers(answerArr);
      setGameAnswerOptions(options);
      setGameName(gameName);
      setGameMathOperations(operations);
      setGameTaskLimit(tasksLimit ? tasksLimit : duration * 2);
      setGameSummary([]);
    }
  }, [isGameLoading]);

  useMount(() => {
    setGameLoading(true);
  });

  return (
    <>
      <AppHeader text={gameName} />
      <GameHeader style={styles.gameHeader} gameTimeRef={gameTime} />
      <View style={[GS.flexOne, GS.alignCenter]}>
        {isGameLoading && (
          <NumberLoader
            loadNumber={3}
            onFinish={startGame}
            style={styles.loader}
          />
        )}
        {isGameRunning && <GameContent gameTimeRef={gameTime} />}
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  loader: {
    paddingTop: normalizeHeight(100),
  },
  gameHeader: {
    marginTop: normalizeHeight(12),
  },
});
