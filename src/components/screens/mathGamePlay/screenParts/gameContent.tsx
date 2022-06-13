import {Answer} from 'components/animations/answer';
import React from 'react';
import {Text, View} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';
import {
  useGameProblemIndex,
  useGameProblems,
  useGameShowAnswer,
} from 'utils/atoms/gameAtoms';
import {GS} from 'utils/globalStyles';
import {Options} from './options';

type GameProps = {
  gameTimeRef: Animated.SharedValue<number>;
};

export const GameContent = ({gameTimeRef}: GameProps) => {
  const answerRef = useSharedValue('');
  const showAnswer = useGameShowAnswer();

  // TODO extract Problem to component
  return (
    <>
      <View style={[GS.flexOne, GS.justifyCenter]}>
        <Problem />
      </View>
      {showAnswer && <Answer answerRef={answerRef} />}
      <View style={[GS.marginTopAuto]}>
        <Options answerRef={answerRef} gameTimeRef={gameTimeRef} />
      </View>
    </>
  );
};

const Problem = () => {
  const problems = useGameProblems();
  const gameIndex = useGameProblemIndex();

  console.log('problems', problems);

  return <Text style={[GS.base60024]}>{problems[gameIndex]}</Text>;
};
