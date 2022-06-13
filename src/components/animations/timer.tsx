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
  useGameRunning,
  useGameTaskLimit,
  useSetGameSummary,
} from 'utils/atoms/gameAtoms';
import {GameConst} from 'utils/consts';
import {GS} from 'utils/globalStyles';
import {msToHMS} from 'utils/worklets';

type AnimatedStopperProps = {
  textStyle?: TextStyle;
  gameTimeRef: Animated.SharedValue<number>;
};

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const Timer = ({textStyle, gameTimeRef}: AnimatedStopperProps) => {
  const {navigate, goBack} = useAppNavigation();
  const duration = useGameDuration() * 1000;
  const tasksLimit = useGameTaskLimit();
  const isTimeBased = tasksLimit === 0;
  const isGameRunning = useGameRunning();
  const setSummary = useSetGameSummary();
  const animatedDuration = useSharedValue(isTimeBased ? duration : 0);

  const endGame = useCallback(() => {
    goBack();
    navigate('AppModal', {type: 'MathSummary'});
  }, [goBack, navigate]);

  const stopperText = useDerivedValue(() => {
    return msToHMS(animatedDuration.value);
  });

  useEffect(() => {
    if (isGameRunning) {
      if (isTimeBased) {
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
              runOnJS(setSummary)(summary => [
                ...summary,
                {
                  time: lastTime,
                },
              ]);
              runOnJS(endGame)();
            }
          },
        );
      } else if (!isTimeBased) {
        animatedDuration.value = 0;
        animatedDuration.value = withTiming(GameConst.maxGameTime * 1000, {
          duration: GameConst.maxGameTime * 1000,
          easing: Easing.linear,
        });
      }
      gameTimeRef.value = Date.now();
    } else {
      animatedDuration.value = isTimeBased ? duration : 0;
    }
  }, [
    animatedDuration,
    duration,
    endGame,
    gameTimeRef,
    isGameRunning,
    isTimeBased,
    setSummary,
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
      defaultValue={isTimeBased ? msToHMS(duration) : '0.00'}
      style={[GS.base60024, textStyle]}
      animatedProps={animatedProps as any}
    />
  );
};
