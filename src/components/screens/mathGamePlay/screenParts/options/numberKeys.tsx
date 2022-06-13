import {useCorrectAnswerResponse} from 'hooks/useCorrectAnswer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {TouchableOption} from './touchableOption';

type OptionsProps = {
  gameTimeRef: Animated.SharedValue<number>;
  answerRef: Animated.SharedValue<string>;
};

export const NumberKeys = ({gameTimeRef, answerRef}: OptionsProps) => {
  const correctAnswerResponse = useCorrectAnswerResponse(
    gameTimeRef,
    answerRef,
  );

  const answerProblem = (pressedAnswer: string) => {
    correctAnswerResponse((answerRef.value += pressedAnswer));
  };
  return (
    <View style={[styles.numPadContainer]}>
      {['1', '2', '3', '4', '5', '6', '7', '8', '9', '.', '0', 'D'].map(num => (
        <TouchableOption key={num} value={num} onPress={answerProblem} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  numPadContainer: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
