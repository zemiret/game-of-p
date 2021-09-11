import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'app/state/store';

export interface SettingsState {
  battleModeRoundTime: number;
  battleModeRoundNumber: number;
}

const initialState: SettingsState = {
  battleModeRoundTime: 3,
  battleModeRoundNumber: 2,
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
    setBattleModeRoundNumber(state, action: PayloadAction<number>) {
      if (action.payload > 0) {
        state.battleModeRoundNumber = action.payload;
      }
    },
  },
});

export default settingsSlice.reducer;

export const {setBattleModeRoundTime, setBattleModeRoundNumber} =
  settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;

export const selectBattleModeRoundTime = createSelector(
  selectSettings,
  state => state.battleModeRoundTime,
);

export const selectBattleModeRoundNumber = createSelector(
  selectSettings,
  state => state.battleModeRoundNumber,
);
