import React, {Dispatch, ReducerAction} from 'react';

export interface SettingsState {
  battleModeRoundTime: number;
}

export const defaultSettingsState: SettingsState = {
  battleModeRoundTime: 1000 * 60,
};

export const enum SettingsActionType {
  SET_BATTLE_MODE_ROUND_TIME = 'SET_BATTLE_MODE_ROUND_TIME',
}

export type SettingsAction = {
  type: SettingsActionType.SET_BATTLE_MODE_ROUND_TIME;
  payload: number;
};

export const settingsReducer = (
  state: SettingsState,
  action: SettingsAction,
): SettingsState => {
  switch (action.type) {
    case SettingsActionType.SET_BATTLE_MODE_ROUND_TIME:
      return {
        ...state,
        battleModeRoundTime: action.payload,
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
