import React from 'react';
import {TextStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedProps,
  useDerivedValue,
} from 'react-native-reanimated';
import {useGameAnswers, useGameProblemIndex} from 'utils/atoms/gameAtoms';
import {COLORS} from 'utils/enums';
import {GS} from 'utils/globalStyles';

type NumberLoaderProps = {
  style?: TextStyle;
  answerRef: Animated.SharedValue<string>;
};

const getColor = (answer: string, answered: string) => {
  'worklet';
  return answer.startsWith(answered) ? COLORS.YELLOW : COLORS.RED;
};

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const Answer = ({style, answerRef}: NumberLoaderProps) => {
  const answers = useGameAnswers();
  const gameIndex = useGameProblemIndex();

  const color = useDerivedValue(() => {
    return getColor(answers[gameIndex], answerRef.value);
  }, [gameIndex, answers]);
  const animatedProps = useAnimatedProps(() => {
    return {
      text: answerRef.value,
      color: color.value,
    };
  });

  return (
    <AnimatedTextInput
      underlineColorAndroid="transparent"
      editable={false}
      defaultValue={''}
      style={[GS.base600100, style]}
      animatedProps={animatedProps as any}
    />
  );
};
