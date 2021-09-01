import React, {Dispatch, ReducerAction} from 'react';

export interface SettingsState {
  battleModeRoundTime: number;
  battleModeWordsCount: number;
}

export const defaultSettingsState: SettingsState = {
  battleModeRoundTime: 1000 * 60 * 3,
  battleModeWordsCount: 10,
};

export const enum SettingsActionType {
  SET_BATTLE_MODE_ROUND_TIME = 'SET_BATTLE_MODE_ROUND_TIME',
  SET_BATTLE_MODE_WORDS_COUNT = 'SET_BATTLE_MODE_WORDS_COUNT',
}

export type SettingsAction =
  | {
      type: SettingsActionType.SET_BATTLE_MODE_ROUND_TIME;
      payload: number;
    }
  | {
      type: SettingsActionType.SET_BATTLE_MODE_WORDS_COUNT;
      payload: number;
    };

export const settingsReducer = (
  state: SettingsState,
  action: SettingsAction,
): SettingsState => {
  switch (action.type) {
    case SettingsActionType.SET_BATTLE_MODE_ROUND_TIME:
      if (action.payload <= 0) {
        return state;
      }
      return {
        ...state,
        battleModeRoundTime: action.payload,
      };
    case SettingsActionType.SET_BATTLE_MODE_WORDS_COUNT:
      if (action.payload <= 0) {
        return state;
      }
      return {
        ...state,
        battleModeWordsCount: action.payload,
      };
    default:
      return state;
  }
};

export interface SettingsContextState {
  state: SettingsState;
  dispatch: Dispatch<ReducerAction<typeof settingsReducer>>;
}

export const SettingsContext = React.createContext<SettingsContextState>({
  state: defaultSettingsState,
  dispatch: () => undefined,
});
