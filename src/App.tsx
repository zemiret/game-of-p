import React, {useReducer} from 'react';
import Navigation from 'app/navigation';
import {
  defaultSettingsState,
  SettingsContext,
  settingsReducer,
} from 'app/settings/state';

const App = () => {
  const [settingsState, settingsDispatch] = useReducer(
    settingsReducer,
    defaultSettingsState,
  );

  return (
    <SettingsContext.Provider
      value={{state: settingsState, dispatch: settingsDispatch}}>
      <Navigation />
    </SettingsContext.Provider>
  );
};

export default App;
