import {configureStore} from '@reduxjs/toolkit';
import battleMode from 'app/battleMode/state';
import settings from 'app/settings/state';
import onboarding from 'app/onboarding/state';

const store = configureStore({
  reducer: {
    battleMode,
    settings,
    onboarding,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;
