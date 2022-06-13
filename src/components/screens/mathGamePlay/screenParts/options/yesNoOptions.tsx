import {useAppNavigation} from 'hooks/commonHooks';
import {useCorrectAnswerResponse} from 'hooks/useCorrectAnswer';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {useSetGameSummary} from 'utils/atoms/gameAtoms';
import {TouchableOption} from './touchableOption';

type OptionsProps = {
  gameTimeRef: Animated.SharedValue<number>;
};

export const YesNoOptions = ({gameTimeRef}: OptionsProps) => {
  const correctAnswerResponse = useCorrectAnswerResponse(gameTimeRef);
  const setSummary = useSetGameSummary();
  const {navigate, goBack} = useAppNavigation();

  const answerProblem = (pressedAnswer: string) => {
    // right answer
    const isCorrect = correctAnswerResponse(pressedAnswer);

    if (!isCorrect) {
      const now = Date.now();
      setSummary(summary => [
        ...summary,
        {
          time: now - gameTimeRef.value,
        },
      ]);
      goBack();
      navigate('AppModal', {type: 'MathSummary'});
    }
  };

  return (
    <View style={[styles.container]}>
      {['true', 'false'].map(option => (
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
  },
  touchWidth: {
    width: '50%',
  },
});
