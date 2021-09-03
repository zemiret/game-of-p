import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'app/state/store';

export interface SettingsState {
  battleModeRoundTime: number;
  battleModeWordsCount: number;
  battleModeRoundNumber: number;
}

const initialState: SettingsState = {
  battleModeRoundTime: 60,
  battleModeRoundNumber: 5,
  battleModeWordsCount: 10,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setBattleModeRoundTime(state, action: PayloadAction<number>) {
      if (action.payload > 0) {
        state.battleModeRoundTime = action.payload;
      }
    },
    setBattleModeWordsCount(state, action: PayloadAction<number>) {
      if (action.payload > 0) {
        state.battleModeWordsCount = action.payload;
      }
    },
    setBattleModeRoundNumber(state, action: PayloadAction<number>) {
      if (action.payload > 0) {
        state.battleModeRoundNumber = action.payload;
      }
    },
  },
});

export default settingsSlice.reducer;

export const {
  setBattleModeRoundTime,
  setBattleModeWordsCount,
  setBattleModeRoundNumber,
} = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;

export const selectBattleModeRoundTime = createSelector(
  selectSettings,
  state => state.battleModeRoundTime,
);

export const selectBattleModeWordsCount = createSelector(
  selectSettings,
  state => state.battleModeWordsCount,
);

export const selectBattleModeRoundNumber = createSelector(
  selectSettings,
  state => state.battleModeRoundNumber,
);
