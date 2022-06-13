import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ANSWER_OPTIONS, GAMES, GAME_SETTINGS} from 'utils/enums';
import {normalizeHeight} from 'utils/sizes';
import {GamePlay} from 'utils/types';
import GameLauncher from './gameLauncher';

const games: GamePlay[] = [
  {
    gameName: GAMES.SIMPLE_MATH,
    optionsType: ANSWER_OPTIONS.NUMBERS,
    settings: [GAME_SETTINGS.DURATION, GAME_SETTINGS.OPERATIONS],
    showAnswer: true,
    isArcade: false,
  },
  {
    gameName: GAMES.EQUATIONS,
    optionsType: ANSWER_OPTIONS.NUMBERS,
    settings: [GAME_SETTINGS.DURATION, GAME_SETTINGS.OPERATIONS],
    showAnswer: true,
    isArcade: false,
  },
  {
    gameName: GAMES.ARCADE,
    optionsType: ANSWER_OPTIONS.YES_NO,
    settings: [GAME_SETTINGS.OPERATIONS],
    showAnswer: false,
    isArcade: true,
  },
  {
    gameName: GAMES.CALENDAR,
    optionsType: ANSWER_OPTIONS.DAYS,
    settings: [GAME_SETTINGS.DURATION],
    showAnswer: false,
    isArcade: false,
  },
  {
    gameName: GAMES.SQUARE_ROOTS,
    optionsType: ANSWER_OPTIONS.FOUR_OPTIONS,
    settings: [GAME_SETTINGS.DURATION],
    showAnswer: true,
    isArcade: false,
  },
];

const Games = () => {
  return (
    <View style={styles.gameLaunchers}>
      {games.map((game, i) => (
        <GameLauncher key={i.toString()} {...game} />
      ))}
    </View>
  );
};

export default Games;

const styles = StyleSheet.create({
  gameLaunchers: {
    alignItems: 'center',
    marginTop: normalizeHeight(40),
  },
});
