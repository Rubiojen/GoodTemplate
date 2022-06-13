// NAVIGATION

import {NavigationProp, RouteProp} from '@react-navigation/native';
import {ANSWER_OPTIONS, GAMES, GAME_SETTINGS} from './enums';

export type RootStackParamList = {
  Home: undefined;
  MathGamePlay: undefined;
  AppModal: {
    type: 'MathSettingsModal' | 'MathSummary';
  };
};

export type RootNavigationProps = NavigationProp<RootStackParamList>;

export type AppModalRouteProp = RouteProp<RootStackParamList, 'AppModal'>;

// ** GAME **

export type GetGameParams = {
  problem: string;
  answer: string;
  options?: string[];
};

export type GetGameArrParams = {
  problemArr: string[];
  answerArr: string[];
  options: string[][];
};

export type GamePlay = {
  gameName: GAMES;
  optionsType: ANSWER_OPTIONS;
  settings: GAME_SETTINGS[];
  showAnswer: boolean;
  isArcade?: boolean;
};

export type GameSummary = {
  problem?: string;
  answer?: string;
  time: number;
};
