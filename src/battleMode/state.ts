import {defaultSettingsState, SettingsState} from 'app/settings/state';
import {Words} from 'app/services/words';
import React, {Dispatch, ReducerAction, ReducerState} from 'react';

export const enum Team {
  BLUE = 'BLUE',
  RED = 'RED',
}

export const enum BattleActionType {
  INIT = 'INIT',
  SET_CURRENT_TEAM = 'SET_CURRENT_TEAM',
  SET_ROUND_NUMBER = 'SET_ROUND_NUMBER',
  SET_COUNTDOWN_TIME = 'SET_COUNTDOWN_TIME',
  SET_SCORE = 'SET_SCORE',
}

export type BattleAction =
  | {
      type: BattleActionType.INIT;
      payload: SettingsState;
    }
  | {
      type: BattleActionType.SET_CURRENT_TEAM;
      payload: Team;
    }
  | {
      type: BattleActionType.SET_ROUND_NUMBER;
      payload: number;
    }
  | {
      type: BattleActionType.SET_COUNTDOWN_TIME;
      payload: number;
    }
  | {
      type: BattleActionType.SET_SCORE;
      team: Team;
      score: number;
    };

export interface TeamState {
  score: number;
  // wordList should be generated in advance to avoid duplicates
  wordList: string[];
}

export interface BattleState {
  currentTeam: Team;
  // in seconds the time left for the current team
  countdownTime: number;
  roundNumber: number;
  [Team.BLUE]: TeamState;
  [Team.RED]: TeamState;
}

const splitWords = (words: string[]): [string[], string[]] => {
  const halfIdx = Math.floor(words.length / 2);
  return [words.slice(0, halfIdx), words.slice(halfIdx)];
};

export const battleModeInitialState = (
  settings: SettingsState,
): BattleState => {
  const [redWords, blueWords] = splitWords(
    Words.selectBatch(settings.battleModeWordsCount * 2),
  );

  return {
    currentTeam: Team.RED,
    countdownTime: settings.battleModeRoundTime,
    roundNumber: 0,
    [Team.BLUE]: {
      score: 0,
      wordList: blueWords,
    },
    [Team.RED]: {
      score: 0,
      wordList: redWords,
    },
  };
};

export const battleModeReducer = (
  state: BattleState,
  action: BattleAction,
): BattleState => {
  switch (action.type) {
    case BattleActionType.INIT:
      return battleModeInitialState(action.payload);
    case BattleActionType.SET_CURRENT_TEAM:
      return {
        ...state,
        currentTeam: action.payload,
      };
    case BattleActionType.SET_ROUND_NUMBER:
      if (action.payload < 0) {
        return state;
      }
      return {
        ...state,
        roundNumber: action.payload,
      };
    case BattleActionType.SET_COUNTDOWN_TIME:
      if (action.payload < 0) {
        return state;
      }
      return {
        ...state,
        countdownTime: action.payload,
      };
    case BattleActionType.SET_SCORE:
      if (action.score < 0) {
        return state;
      }
      return {
        ...state,
        [action.team]: {
          ...state[action.team],
          score: action.score,
        },
      };
    default:
      return state;
  }
};

// We just initialize with default settings. Actual ones will be used when we actually init the battle sequence
export const battleModeStateZero = battleModeInitialState(defaultSettingsState);

export interface BattleModeContextState {
  state: ReducerState<typeof battleModeReducer>;
  dispatch: Dispatch<ReducerAction<typeof battleModeReducer>>;
}

export const BattleModeContext = React.createContext<BattleModeContextState>({
  state: battleModeStateZero,
  dispatch: () => undefined,
});
