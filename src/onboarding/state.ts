import {createAsyncThunk, createSelector, createSlice} from '@reduxjs/toolkit';
import {PersistentStorage} from 'app/state/persistentStorage';
import {RootState} from 'app/state/store';

export interface OnboardingState {
  seen: boolean;
}

const enum PersistentStorageKey {
  ONBOARDING_SEEN = 'ONBOARDING_SEEN',
}

const initialState: OnboardingState = {
  seen: true,
};

export const fetchOnboardingSeen = createAsyncThunk(
  'onboarding/fetchOnboardingSeen',
  async (): Promise<OnboardingState> => {
    const optionalSeen = await PersistentStorage.get(
      PersistentStorageKey.ONBOARDING_SEEN,
    );
    const seen = optionalSeen !== null;

    return {
      seen,
    };
  },
);

export const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    setOnboardingSeen(state) {
      state.seen = true;
      PersistentStorage.store(
        PersistentStorageKey.ONBOARDING_SEEN,
        JSON.stringify(true),
      );
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchOnboardingSeen.fulfilled, (state, action) => {
      state.seen = action.payload.seen;
    });
  },
});

export default onboardingSlice.reducer;

export const {setOnboardingSeen} = onboardingSlice.actions;

export const selectOnboarding = (state: RootState) => state.onboarding;

export const selectOnboardingSeen = createSelector(
  selectOnboarding,
  state => state.seen,
);
