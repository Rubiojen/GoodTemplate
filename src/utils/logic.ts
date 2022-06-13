import {GAMES, OPERATIONS} from './enums';
import {GameSummary, GetGameArrParams, GetGameParams} from './types';

const opNames = {
  [OPERATIONS.PLUS]: 'plus',
  [OPERATIONS.MINUS]: 'minus',
  [OPERATIONS.MULTIPLY]: 'multiply',
  [OPERATIONS.DIVIDE]: 'divide',
};

export const getInitials = (string: string): string => {
  const names = string.split(' ');
  let initials = names[0].substring(0, 1).toUpperCase();

  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  } else {
    initials = names[0].substring(0, 2).toUpperCase();
  }

  return initials;
};

export const getRandomNumber = (
  minIncluded: number,
  maxIncluded: number,
): number => {
  // min and max included
  return Math.floor(
    Math.random() * (maxIncluded - minIncluded + 1) + minIncluded,
  );
};

export const getRandomInt = (maxNotIncluded: number) => {
  return Math.floor(Math.random() * maxNotIncluded);
  // for 3 expected output: 0, 1 or 2
};

const getTrueOrFalseAnswerSameChance = (trueAnswer: number) => {
  const zeroOrOne = getRandomInt(2);
  let wrongAnswer = getRandomNumber(trueAnswer - 5, trueAnswer + 5);
  while (wrongAnswer === trueAnswer) {
    wrongAnswer = getRandomNumber(trueAnswer - 5, trueAnswer + 5);
  }
  return zeroOrOne === 0 ? wrongAnswer : trueAnswer;
};

export const getTask = (operations: OPERATIONS[]) => {
  const operation = operations[Math.floor(Math.random() * operations.length)];
  let numberOne = 0;
  let numberTwo = 0;
  let answer = 0;
  switch (operation) {
    case OPERATIONS.PLUS:
      numberOne = getRandomNumber(2, 50);
      numberTwo = getRandomNumber(2, 50);
      answer = numberOne + numberTwo;
      break;
    case OPERATIONS.MINUS:
      numberOne = getRandomNumber(2, 50);
      numberTwo = getRandomNumber(2, 50);
      answer = numberOne + numberTwo;
      [answer, numberOne] = [numberOne, answer];
      break;
    case OPERATIONS.MULTIPLY:
      numberOne = getRandomNumber(2, 10);
      numberTwo = getRandomNumber(2, 10);
      answer = numberOne * numberTwo;
      break;
    case OPERATIONS.DIVIDE:
      numberOne = getRandomNumber(2, 10);
      numberTwo = getRandomNumber(2, 10);
      answer = numberOne * numberTwo;
      [answer, numberOne] = [numberOne, answer];
      break;
  }
  return {
    numberOne: numberOne,
    numberTwo: numberTwo,
    answer: answer,
    randomAnswer: getTrueOrFalseAnswerSameChance(answer),
    operation,
  };
};

const randomDate = (start: Date, end: Date) => {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  );
};

const getRootsQuestion = (): GetGameParams => {
  const rootNumber = getRandomNumber(14, 99);
  return {
    problem: (rootNumber * rootNumber).toString(),
    answer: rootNumber.toString(),
    options: [
      (rootNumber - 3).toString(),
      (rootNumber - 2).toString(),
      (rootNumber - 1).toString(),
      rootNumber.toString(),
      (rootNumber + 1).toString(),
      (rootNumber + 2).toString(),
    ],
  };
};

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
const getDateQuestion = (): GetGameParams => {
  const ranDate = randomDate(new Date(2012, 0, 1), new Date());
  return {
    problem: ranDate.toISOString().split('T')[0],
    answer: days[ranDate.getDay()],
  };
};

const getArcadeQuestion = (): GetGameParams => {
  const {numberOne, numberTwo, answer, operation, randomAnswer} = getTask([
    OPERATIONS.PLUS,
    OPERATIONS.MINUS,
  ]);
  return {
    problem: `${numberOne} ${operation} ${numberTwo} = ${randomAnswer}`,
    answer: (answer === randomAnswer).toString(),
  };
};

const getEquation = (): GetGameParams => {
  return {
    problem: '2x + 5 = 15',
    answer: '5',
  };
};

const getSimpleMath = (operations: OPERATIONS[]): GetGameParams => {
  const {numberOne, numberTwo, answer, operation} = getTask(operations);
  return {
    problem: `${numberOne} ${operation} ${numberTwo}`,
    answer: answer.toString(),
  };
};

const getGameArrays = (
  arrLength: number,
  getFunc: (operations?: OPERATIONS[]) => GetGameParams,
  operations?: OPERATIONS[],
): GetGameArrParams => {
  let answerArr = [];
  let problemArr = [];
  let optionsArr = [];
  for (let i = 0; i < arrLength; i++) {
    const {answer, problem, options} = getFunc(operations);
    answerArr.push(answer);
    problemArr.push(problem);
    options && optionsArr.push(options);
  }
  return {
    options: optionsArr,
    problemArr,
    answerArr,
  };
};

export const getProblemAndAnswerArr = (
  gameName: GAMES,
  operations: OPERATIONS[],
  arrLength: number,
): GetGameArrParams => {
  switch (gameName) {
    case GAMES.EQUATIONS:
      return getGameArrays(arrLength, getEquation);
    case GAMES.SIMPLE_MATH:
      return getGameArrays(
        arrLength,
        getSimpleMath as (operations?: OPERATIONS[]) => GetGameParams,
        operations,
      );
    case GAMES.ARCADE:
      return getGameArrays(arrLength, getArcadeQuestion);
    case GAMES.CALENDAR:
      return getGameArrays(arrLength, getDateQuestion);
    case GAMES.SQUARE_ROOTS:
      return getGameArrays(arrLength, getRootsQuestion);
  }
};

type FormatedSummary = {
  min: number;
  max: number;
  speedPerTask: string;
  operationsSpeed: string[][];
  totalTime: string;
};

export const millisToSeconds = (millis: number) => {
  let ms = millis % 1000;
  let sec = Math.floor(millis / 1000);
  return Number(`${sec}${ms ? `.${ms < 100 ? `0${ms}` : ms}` : ''}`).toFixed(2);
};

export const formatSummary = (
  summary: GameSummary[],
  isTimeBased: boolean,
  operations: OPERATIONS[],
  duration: number,
): FormatedSummary => {
  const summaryArr = isTimeBased
    ? summary.filter((s, i) => i !== summary.length - 1)
    : [...summary];

  const totalTime = summary.reduce((total, sum) => (total += sum.time), 0);

  const min = Math.min(...summaryArr.map(i => i.time));

  const max = Math.max(...summaryArr.map(i => i.time));

  const totalAnsweredTime = !isTimeBased
    ? summaryArr.reduce((total, sum) => (total += sum.time), 0)
    : duration;

  const speedPerTask =
    Number(millisToSeconds(totalAnsweredTime)) / summaryArr.length;

  const operationsSpeed =
    operations.length > 1
      ? operations.map(operation => {
          const totalOpAnsweredTime = summaryArr
            .filter(sum => sum.problem?.includes(operation))
            .reduce((total, sum) => (total += sum.time), 0);
          const operationSpeedPerTask =
            Number(millisToSeconds(totalOpAnsweredTime)) /
            summaryArr.filter(sum => sum.problem?.includes(operation)).length;
          return [operation, noNaN(operationSpeedPerTask)];
        })
      : [];
  return {
    min,
    max,
    totalTime: millisToSeconds(totalTime),
    speedPerTask: noNaN(speedPerTask),
    operationsSpeed,
  };
};

const noNaN = (num: number) => (isNaN(num) ? '-' : num.toFixed(2));

export const getOperationName = (operations: OPERATIONS[]) =>
  operations?.length > 1 ? 'all' : opNames[operations[0]];

export const getGameBestScore = (
  bestScores: any,
  gameName: GAMES,
  duration: number,
  operations: OPERATIONS[],
) => {
  const operation = getOperationName(operations);
  let bestScore: any = bestScores?.[gameName] || 0;
  if (bestScore && duration && bestScore?.[duration]) {
    bestScore = bestScore?.[duration];
  }
  if (
    bestScore &&
    operations &&
    bestScore?.[operation as unknown as string] >= 0
  ) {
    bestScore = bestScore?.[operation as unknown as string];
  }
  return typeof bestScore === 'number' ? bestScore : 0;
};
