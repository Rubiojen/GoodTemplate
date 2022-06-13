import {useCorrectAnswerResponse} from 'hooks/useCorrectAnswer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useGameAnswerOptions, useGameProblemIndex} from 'utils/atoms/gameAtoms';
import {TouchableOption} from './touchableOption';

type OptionsProps = {
  gameTimeRef: Animated.SharedValue<number>;
};

export const FourOptions = ({gameTimeRef}: OptionsProps) => {
  const correctAnswerResponse = useCorrectAnswerResponse(gameTimeRef);
  const options = useGameAnswerOptions();
  const gameIndex = useGameProblemIndex();

  const answerProblem = (pressedAnswer: string) => {
    // right answer
    correctAnswerResponse(pressedAnswer);
  };

  return (
    <View style={[styles.container]}>
      {options[gameIndex].map(option => (
        <TouchableOption
          key={option}
          onPress={answerProblem}
          value={option}
          style={styles.touchWidth}
        />
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
  touchWidth: {
    width: '50%',
  },
});
