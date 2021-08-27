import Menu from 'app/Menu';
import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Freeplay from 'app/Freeplay';
import {NavigationContainer} from '@react-navigation/native';
import Settings from 'app/Settings';
import BattleMode from 'app/BattleMode';
import Onboarding from 'app/Onboarding';

type NavigationProp<RouteName extends keyof NavigationParams = Routes> =
  NativeStackNavigationProp<NavigationParams, RouteName>;

export interface WithNavigationProp {
  navigation: NavigationProp;
}

export const navigateAction =
  (
    navigation: NativeStackNavigationProp<
      NavigationParams,
      keyof NavigationParams
    >,
    route: Routes,
  ) =>
  () => {
    navigation.navigate({name: route}, route);
  };

export const enum Routes {
  MENU = 'MENU',
  FREEPLAY = 'FREEPLAY',
  SETTINGS = 'SETTINGS',
  BATTLE_MODE = 'BATTLE_MODE',
  ONBOARDING = 'ONBOARDING',
}

export type NavigationParams = {
  [Routes.MENU]: undefined;
  [Routes.FREEPLAY]: undefined;
  [Routes.SETTINGS]: undefined;
  [Routes.BATTLE_MODE]: undefined;
  [Routes.ONBOARDING]: undefined;
};

const Stack = createNativeStackNavigator<NavigationParams>();

const Navigation: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={Routes.MENU}>
      <Stack.Screen name={Routes.MENU} component={Menu} />
      <Stack.Screen name={Routes.FREEPLAY} component={Freeplay} />
      <Stack.Screen name={Routes.BATTLE_MODE} component={BattleMode} />
      <Stack.Screen name={Routes.SETTINGS} component={Settings} />
      <Stack.Screen name={Routes.ONBOARDING} component={Onboarding} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
