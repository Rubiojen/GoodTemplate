import {useAppNavigation} from 'hooks/commonHooks';
import React, {useCallback, useEffect} from 'react';
import {TextStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedProps,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {
  useGameDuration,
  useGameProblemIndex,
  useGameProblems,
  useGameRunning,
  useGameSetters,
  useGameTaskLimit,
} from 'utils/atoms/gameAtoms';
import {GS} from 'utils/globalStyles';
import {msToHMS} from 'utils/worklets';

type AnimatedStopperProps = {
  textStyle?: TextStyle;
  gameTimeRef: Animated.SharedValue<number>;
};

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const ArcadeTimer = ({textStyle, gameTimeRef}: AnimatedStopperProps) => {
  const {setGameSummary} = useGameSetters();
  const {navigate, goBack} = useAppNavigation();
  const problems = useGameProblems();
  const gameIndex = useGameProblemIndex();
  const duration = useGameDuration();
  const tasksLimit = useGameTaskLimit();
  const isGameRunning = useGameRunning();
  const isTimeBased = tasksLimit === 0;
  const animatedDuration = useSharedValue(isTimeBased ? duration : 0);

  const endGame = useCallback(() => {
    goBack();
    navigate('AppModal', {type: 'MathSummary'});
  }, [navigate, goBack]);

  const stopperText = useDerivedValue(() => {
    return msToHMS(animatedDuration.value);
  });

  useEffect(() => {
    if (isGameRunning && problems[gameIndex]) {
      animatedDuration.value = duration;
      animatedDuration.value = withTiming(
        0,
        {
          duration,
          easing: Easing.linear,
        },
        isFinished => {
          if (isFinished && isTimeBased) {
            const lastTime = Date.now() - gameTimeRef.value;
            runOnJS(setGameSummary)(summery => [
              ...summery,
              {
                time: lastTime,
              },
            ]);
            runOnJS(endGame)();
          }
        },
      );
      gameTimeRef.value = Date.now();
    } else {
      animatedDuration.value = isTimeBased ? duration : 0;
    }
  }, [
    animatedDuration,
    duration,
    endGame,
    gameIndex,
    gameTimeRef,
    isGameRunning,
    isTimeBased,
    problems,
    setGameSummary,
  ]);

  const animatedProps = useAnimatedProps(() => {
    return {
      text: stopperText.value,
    };
  });

  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      defaultValue={msToHMS(duration)}
      style={[GS.base60024, textStyle]}
      animatedProps={animatedProps as any}
    />
  );
};
