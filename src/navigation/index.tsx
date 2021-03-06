import Menu from 'app/Menu';
import React, {useEffect} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Freeplay from 'app/Freeplay';
import {
  NavigationContainer,
  NavigationProp as BaseNavigationProp,
  RouteProp,
} from '@react-navigation/native';
import Settings from 'app/settings/Settings';
import Onboarding from 'app/onboarding/Onboarding';
import BattleModeInit from 'app/battleMode/BattleModeInit';
import BattleModeSummary from 'app/battleMode/BattleModeSummary';
import BattleModeWordChallenge from 'app/battleMode/BattleModeWordChallenge';
import BattleModeFinalSummary from 'app/battleMode/BattleModeFinalSummary';
import {fetchDefaultStoredSettings} from 'app/settings/state';
import {useDispatch} from 'app/state/hooks';
import {fetchOnboardingSeen} from 'app/onboarding/state';
import {Team} from 'app/battleMode/state';

export const navigateAction =
  (navigation: BaseNavigationProp<NavigationParams>, route: Routes) => () => {
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

type BattleModeWordChallengeParams = {
  team: Team;
};

type BattleModeSummaryParams = {
  endTurnFor: Team;
  // success: boolean;
};

export type NavigationParams = {
  [Routes.MENU]: undefined;
  [Routes.FREEPLAY]: undefined;
  [Routes.SETTINGS]: undefined;
  [Routes.ONBOARDING]: undefined;

  [Routes.BATTLE_MODE_INIT]: undefined;
  [Routes.BATTLE_MODE_SUMMARY]: BattleModeSummaryParams;
  [Routes.BATTLE_MODE_WORD_CHALLENGE]: BattleModeWordChallengeParams;
  [Routes.BATTLE_MODE_FINAL_SUMMARY]: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends NavigationParams {}
  }
}

export type NavigationRouteProp<RouteName extends keyof NavigationParams> =
  RouteProp<NavigationParams, RouteName>;

export type NavigationProp<RouteName extends keyof NavigationParams> =
  NativeStackNavigationProp<NavigationParams, RouteName>;

export const NavigationStack = createNativeStackNavigator<NavigationParams>();

const Navigation: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDefaultStoredSettings());
    dispatch(fetchOnboardingSeen());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <NavigationStack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={Routes.MENU}>
        <NavigationStack.Screen name={Routes.MENU} component={Menu} />
        <NavigationStack.Screen name={Routes.FREEPLAY} component={Freeplay} />
        <NavigationStack.Screen name={Routes.SETTINGS} component={Settings} />
        <NavigationStack.Screen
          name={Routes.ONBOARDING}
          component={Onboarding}
        />

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
};

export default Navigation;
