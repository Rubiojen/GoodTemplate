import React from 'react';
import {GAME_SETTINGS} from 'utils/enums';
import {Difficulty} from './gameSettings/difficulty';
import {Duration} from './gameSettings/duration';
import {Operations} from './gameSettings/operations';

type GameSettingsProps = {
  settings: GAME_SETTINGS;
};

export const GameSettings = ({settings}: GameSettingsProps) => {
  switch (settings) {
    case GAME_SETTINGS.OPERATIONS:
      return <Operations />;
    case GAME_SETTINGS.DURATION:
      return <Duration />;
    case GAME_SETTINGS.DIFFICULTY:
      return <Difficulty />;
    default:
      return null;
  }
};
