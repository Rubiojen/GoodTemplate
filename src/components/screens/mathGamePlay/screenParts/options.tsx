import React from 'react';
import Animated from 'react-native-reanimated';
import {useGameAnswerTypes} from 'utils/atoms/gameAtoms';
import {ANSWER_OPTIONS} from 'utils/enums';
import {DaysOptions} from './options/daysOptions';
import {FourOptions} from './options/fourOptions';
import {NumberKeys} from './options/numberKeys';
import {YesNoOptions} from './options/yesNoOptions';

type OptionsProps = {
  gameTimeRef: Animated.SharedValue<number>;
  answerRef: Animated.SharedValue<string>;
};

export const Options = ({gameTimeRef, answerRef}: OptionsProps) => {
  const optionType = useGameAnswerTypes();
  switch (optionType) {
    case ANSWER_OPTIONS.NUMBERS:
      return <NumberKeys answerRef={answerRef} gameTimeRef={gameTimeRef} />;
    case ANSWER_OPTIONS.YES_NO:
      return <YesNoOptions gameTimeRef={gameTimeRef} />;
    case ANSWER_OPTIONS.DAYS:
      return <DaysOptions gameTimeRef={gameTimeRef} />;
    case ANSWER_OPTIONS.FOUR_OPTIONS:
      return <FourOptions gameTimeRef={gameTimeRef} />;
    default:
      return null;
  }
};
