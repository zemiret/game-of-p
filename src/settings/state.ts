import {
  createAsyncThunk,
  createSelector,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import {RootState} from 'app/state/store';
import {PersistentStorage} from 'app/state/persistentStorage';

export interface SettingsState {
  battleModeRoundTime: number;
  battleModeRoundNumber: number;
}

const enum AsyncStorageKeys {
  BATTLE_MODE_ROUND_TIME = 'BATTLE_MODE_ROUND_TIME',
  BATTLE_MODE_ROUND_NUMBER = 'BATTLE_MODE_ROUND_NUMBER',
}

const initialState: SettingsState = {
  battleModeRoundTime: 60,
  battleModeRoundNumber: 1,
};

export const fetchDefaultStoredSettings = createAsyncThunk(
  'settings/fetchDefaultStoredSettings',
  async (): Promise<SettingsState> => {
    const battleModeRoundNumber = Number(
      JSON.parse(
        await PersistentStorage.getOrDefault(
          AsyncStorageKeys.BATTLE_MODE_ROUND_NUMBER,
          JSON.stringify(initialState.battleModeRoundNumber),
        ),
      ),
    );

    const battleModeRoundTime = Number(
      JSON.parse(
        await PersistentStorage.getOrDefault(
          AsyncStorageKeys.BATTLE_MODE_ROUND_TIME,
          JSON.stringify(initialState.battleModeRoundTime),
        ),
      ),
    );

    return {
      battleModeRoundNumber,
      battleModeRoundTime,
    };
  },
);

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setBattleModeRoundTime(state, action: PayloadAction<number>) {
      if (action.payload > 0) {
        state.battleModeRoundTime = action.payload;
        PersistentStorage.store(
          AsyncStorageKeys.BATTLE_MODE_ROUND_TIME,
          JSON.stringify(state.battleModeRoundTime),
        );
      }
    },
    setBattleModeRoundNumber(state, action: PayloadAction<number>) {
      if (action.payload > 0) {
        state.battleModeRoundNumber = action.payload;
        PersistentStorage.store(
          AsyncStorageKeys.BATTLE_MODE_ROUND_NUMBER,
          JSON.stringify(state.battleModeRoundNumber),
        );
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchDefaultStoredSettings.fulfilled, (state, action) => {
      state.battleModeRoundTime = action.payload.battleModeRoundTime;
      state.battleModeRoundNumber = action.payload.battleModeRoundNumber;
    });
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
