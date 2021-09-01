import Menu from 'app/Menu';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Freeplay from 'app/Freeplay';
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
} from '@react-navigation/native';
import Settings from 'app/settings/Settings';
import Onboarding from 'app/Onboarding';
import BattleModeInit from 'app/battleMode/BattleModeInit';
import BattleModeSummary from 'app/battleMode/BattleModeSummary';
import BattleModeWordChallenge from 'app/battleMode/BattleModeWordChallenge';
import BattleModeFinalSummary from 'app/battleMode/BattleModeFinalSummary';

export const navigateAction =
  (navigation: NavigationProp<NavigationParams>, route: Routes) => () => {
    navigation.navigate({name: route, params: undefined});
  };

export const enum Routes {
  MENU = 'MENU',
  FREEPLAY = 'FREEPLAY',
  SETTINGS = 'SETTINGS',
  ONBOARDING = 'ONBOARDING',

  BATTLE_MODE_INIT = 'BATTLE_MODE_INIT',
  BATTLE_MODE_SUMMARY = 'BATTLE_MODE_SUMMARY',
  BATTLE_MODE_WORD_CHALLENGE = 'BATTLE_MODE_WORD_CHALLENGE',
  BATTLE_MODE_FINAL_SUMMARY = 'BATTLE_MODE_FINAL_SUMMARY',
}

export type NavigationParams = {
  [Routes.MENU]: undefined;
  [Routes.FREEPLAY]: undefined;
  [Routes.SETTINGS]: undefined;
  [Routes.ONBOARDING]: undefined;

  [Routes.BATTLE_MODE_INIT]: undefined;
  [Routes.BATTLE_MODE_SUMMARY]: undefined;
  [Routes.BATTLE_MODE_WORD_CHALLENGE]: undefined;
  [Routes.BATTLE_MODE_FINAL_SUMMARY]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationParams {}
  }
}

export type NavigationRouteProp<RouteName extends keyof NavigationParams> =
  RouteProp<NavigationParams, RouteName>;

export const NavigationStack = createNativeStackNavigator<NavigationParams>();

const Navigation: React.FC = () => (
  <NavigationContainer>
    <NavigationStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.MENU}>
      <NavigationStack.Screen name={Routes.MENU} component={Menu} />
      <NavigationStack.Screen name={Routes.FREEPLAY} component={Freeplay} />
      <NavigationStack.Screen name={Routes.SETTINGS} component={Settings} />
      <NavigationStack.Screen name={Routes.ONBOARDING} component={Onboarding} />

      <NavigationStack.Screen
        name={Routes.BATTLE_MODE_INIT}
        component={BattleModeInit}
      />
      <NavigationStack.Screen
        name={Routes.BATTLE_MODE_SUMMARY}
        component={BattleModeSummary}
      />
      <NavigationStack.Screen
        name={Routes.BATTLE_MODE_WORD_CHALLENGE}
        component={BattleModeWordChallenge}
      />
      <NavigationStack.Screen
        name={Routes.BATTLE_MODE_FINAL_SUMMARY}
        component={BattleModeFinalSummary}
      />
    </NavigationStack.Navigator>
  </NavigationContainer>
);

export default Navigation;
