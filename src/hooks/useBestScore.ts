import {
  useBestScores,
  useGameDuration,
  useGameName,
  useGameMathOperations,
} from 'utils/atoms/gameAtoms';
import {getGameBestScore} from 'utils/logic';

export const useBestScore = () => {
  const gameName = useGameName();
  const duration = useGameDuration();
  const operations = useGameMathOperations();
  const bestScores = useBestScores();
  return getGameBestScore(bestScores, gameName, duration, operations || []);
};
