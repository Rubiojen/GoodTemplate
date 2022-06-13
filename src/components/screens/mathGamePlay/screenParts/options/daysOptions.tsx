import {useCorrectAnswerResponse} from 'hooks/useCorrectAnswer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {DAYS} from 'utils/enums';
import {TouchableOption} from './touchableOption';

type OptionsProps = {
  gameTimeRef: Animated.SharedValue<number>;
};

const dayOptions = Object.values(DAYS);

export const DaysOptions = ({gameTimeRef}: OptionsProps) => {
  const correctAnswerResponse = useCorrectAnswerResponse(gameTimeRef);

  const answerProblem = (pressedAnswer: string) => {
    // right answer
    correctAnswerResponse(pressedAnswer);
  };
  return (
    <View style={[styles.container]}>
      {dayOptions.map(option => (
        <TouchableOption key={option} onPress={answerProblem} value={option} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
