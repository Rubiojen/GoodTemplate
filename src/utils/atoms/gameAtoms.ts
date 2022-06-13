import {atom, useRecoilValue, useSetRecoilState} from 'recoil';
import {GameConst} from 'utils/consts';
import {
  ANSWER_OPTIONS,
  GAMES,
  GAME_MODE,
  GAME_SETTINGS,
  GAME_TYPE,
  OPERATIONS,
} from 'utils/enums';
import {GameSummary} from 'utils/types';

// GAME NAME
export const atomGameName = atom({
  key: 'gameName',
  default: GAMES.SIMPLE_MATH,
});

export const useGameName = () => useRecoilValue(atomGameName);
export const useSetGameName = () => useSetRecoilState(atomGameName);

// GAME TYPE
export const atomGameType = atom({
  key: 'gameType',
  default: GAME_TYPE.MATH,
});

export const useGameType = () => useRecoilValue(atomGameType);
export const useSetGameType = () => useSetRecoilState(atomGameType);

// OPTIONS TYPE
export const atomOptionsType = atom({
  key: 'gameOptionsType',
  default: ANSWER_OPTIONS.NUMBERS,
});

export const useGameOptionsType = () => useRecoilValue(atomOptionsType);
export const useSetGameOptionsType = () => useSetRecoilState(atomOptionsType);

// GAME MODE
export const atomGameMode = atom({
  key: 'gameMode',
  default: GAME_MODE.PRACTICE,
});

export const useGameMode = () => useRecoilValue(atomGameMode);
export const useSetGameMode = () => useSetRecoilState(atomGameMode);

// MATH OPERATIONS
export const atomMathOperations = atom({
  key: 'mathOperations',
  default: [OPERATIONS.PLUS],
});

export const useGameMathOperations = () => useRecoilValue(atomMathOperations);
export const useSetGameMathOperations = () =>
  useSetRecoilState(atomMathOperations);

// GAME DURATION
export const atomGameDuration = atom({
  key: 'gameDuration',
  default: GameConst.defaultDuration,
});

export const useGameDuration = () => useRecoilValue(atomGameDuration);
export const useSetGameDuration = () => useSetRecoilState(atomGameDuration);

// GAME DIFFICULTY
export const atomGameDifficulty = atom({
  key: 'gameDifficulty',
  default: 1,
});

export const useGameDifficulty = () => useRecoilValue(atomGameDifficulty);
export const useSetGameDifficulty = () => useSetRecoilState(atomGameDifficulty);

// TASK LIMIT
export const atomGameTaskLimit = atom({
  key: 'taskLimit',
  default: 0,
});

export const useGameTaskLimit = () => useRecoilValue(atomGameTaskLimit);
export const useSetGameTaskLimit = () => useSetRecoilState(atomGameTaskLimit);

// ANSWER TYPES
export const atomGameAnswerTypes = atom({
  key: 'optionTypes',
  default: ANSWER_OPTIONS.NUMBERS,
});

export const useGameAnswerTypes = () => useRecoilValue(atomGameAnswerTypes);
export const useSetGameAnswerTypes = () =>
  useSetRecoilState(atomGameAnswerTypes);

// GAME IS RUNNING
export const atomIsGameRunning = atom({
  key: 'gameRunning',
  default: false,
});

export const useGameRunning = () => useRecoilValue(atomIsGameRunning);
export const useSetGameRunning = () => useSetRecoilState(atomIsGameRunning);

// GAME IS LOADING
export const atomIsGameLoading = atom({
  key: 'gameLoading',
  default: true,
});

export const useGameLoading = () => useRecoilValue(atomIsGameLoading);
export const useSetGameLoading = () => useSetRecoilState(atomIsGameLoading);

// GAME SCORE
export const atomGameScore = atom({
  key: 'gameScore',
  default: 0,
});

export const useGameScore = () => useRecoilValue(atomGameScore);
export const useSetGameScore = () => useSetRecoilState(atomGameScore);

// BEST SCORES
export const atomBestScores = atom({
  key: 'bestScores',
  default: {},
});

export const useBestScores = () => useRecoilValue(atomBestScores);
export const useSetBestscores = () => useSetRecoilState(atomBestScores);

// GAME IS ARCADE
export const atomGameIsArcade = atom({
  key: 'gameIsArcade',
  default: false,
});

export const useGameIsArcade = () => useRecoilValue(atomGameIsArcade);
export const useSetGameIsArcade = () => useSetRecoilState(atomGameIsArcade);

// ANSWERS
export const atomGameAnswers = atom({
  key: 'gameAnswers',
  default: [] as string[],
});

export const useGameAnswers = () => useRecoilValue(atomGameAnswers);
export const useSetGameAnswers = () => useSetRecoilState(atomGameAnswers);

// ANSWER OPTIONS
export const atomGameAnswerOptions = atom({
  key: 'gameAnswerOptions',
  default: [] as string[][],
});

export const useGameAnswerOptions = () => useRecoilValue(atomGameAnswerOptions);
export const useSetGameAnswerOptions = () =>
  useSetRecoilState(atomGameAnswerOptions);

// PROBLEM INDEX
export const atomGameProblemIndex = atom({
  key: 'gameProblemIndex',
  default: 0,
});

export const useGameProblemIndex = () => useRecoilValue(atomGameProblemIndex);
export const useSetGameProblemIndex = () =>
  useSetRecoilState(atomGameProblemIndex);

// PROBLEMS
export const atomGameProblems = atom({
  key: 'gameProblems',
  default: [] as string[],
});

export const useGameProblems = () => useRecoilValue(atomGameProblems);
export const useSetGameProblems = () => useSetRecoilState(atomGameProblems);

// SUMMARY
export const atomGameSummary = atom({
  key: 'gameSummary',
  default: [] as GameSummary[],
});

export const useGameSummary = () => useRecoilValue(atomGameSummary);
export const useSetGameSummary = () => useSetRecoilState(atomGameSummary);

// SUMMARY
export const atomGameSettings = atom({
  key: 'gameSettings',
  default: [] as GAME_SETTINGS[],
});

export const useGameSettings = () => useRecoilValue(atomGameSettings);
export const useSetGameSettings = () => useSetRecoilState(atomGameSettings);

// SUMMARY
export const atomGameShowAnswer = atom({
  key: 'gameShowAnswer',
  default: false,
});

export const useGameShowAnswer = () => useRecoilValue(atomGameShowAnswer);
export const useSetGameShowAnswer = () => useSetRecoilState(atomGameShowAnswer);

export const useGameSetters = () => {
  return {
    setGameShowAnswer: useSetGameShowAnswer(),
    setGameSummary: useSetGameSummary(),
    setGameProblems: useSetGameProblems(),
    setGameProblemIndex: useSetGameProblemIndex(),
    setGameAnswerOptions: useSetGameAnswerOptions(),
    setGameAnswers: useSetGameAnswers(),
    setGameName: useSetGameName(),
    setGameType: useSetGameType(),
    setGameMode: useSetGameMode(),
    setGameMathOperations: useSetGameMathOperations(),
    setGameDuration: useSetGameDuration(),
    setGameDifficulty: useSetGameDifficulty(),
    setGameTaskLimit: useSetGameTaskLimit(),
    setGameAnswerTypes: useSetGameAnswerTypes(),
    setGameRunning: useSetGameRunning(),
    setGameLoading: useSetGameLoading(),
    setGameScore: useSetGameScore(),
    setBestscores: useSetBestscores(),
    setGameIsArcade: useSetGameIsArcade(),
    setGameOptionsType: useSetGameOptionsType(),
    setGameSettings: useSetGameSettings(),
  };
};
