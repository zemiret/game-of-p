import React, {useReducer} from 'react';
import Navigation from 'app/navigation';
import {
  defaultSettingsState,
  SettingsContext,
  settingsReducer,
} from 'app/settings/state';
import {
  BattleModeContext,
  battleModeReducer,
  battleModeStateZero,
} from 'app/battleMode/state';

const App = () => {
  const [settingsState, settingsDispatch] = useReducer(
    settingsReducer,
    defaultSettingsState,
  );

  const [battleModeState, battleModeDispatch] = useReducer(
    battleModeReducer,
    battleModeStateZero,
  );

  return (
    <SettingsContext.Provider
      value={{state: settingsState, dispatch: settingsDispatch}}>
      <BattleModeContext.Provider
        value={{
          state: battleModeState,
          dispatch: battleModeDispatch,
        }}>
        <Navigation />
      </BattleModeContext.Provider>
    </SettingsContext.Provider>
  );
};

export default App;
