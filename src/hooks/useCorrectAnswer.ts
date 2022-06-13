import Animated from 'react-native-reanimated';
import {
  useGameAnswers,
  useGameProblemIndex,
  useGameProblems,
  useGameScore,
  useGameSetters,
} from 'utils/atoms/gameAtoms';

export const useCorrectAnswerResponse = (
  gameTimeRef: Animated.SharedValue<number>,
  answerRef?: Animated.SharedValue<string>,
) => {
  const answers = useGameAnswers();
  const problems = useGameProblems();
  const gameIndex = useGameProblemIndex();
  const gameScore = useGameScore();
  const {setGameSummary, setGameProblemIndex, setGameScore} = useGameSetters();

  const correctAnswerResponse = (answered: string): boolean => {
    if (answers[gameIndex] === answered) {
      setGameScore(gameScore + 1);
      const now = Date.now();

      setGameSummary(summary => [
        ...summary,
        {
          time: now - gameTimeRef.value,
          problem: problems[gameIndex],
          answer: answers[gameIndex],
        },
      ]);
      gameTimeRef.value = now;
      setGameProblemIndex(gameIndex + 1);
      if (answerRef) {
        answerRef.value = '';
      }
      return true;
    } else if (answered.length >= answers[gameIndex].length) {
      if (answerRef) {
        answerRef.value = '';
      }
    }
    return false;
  };

  return correctAnswerResponse;
};
