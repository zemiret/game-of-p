import React from 'react';
import {navigateAction, Routes, WithNavigationProp} from 'app/navigation';
import {View} from 'react-native';
import Button from 'app/components/button';

interface MenuProps extends WithNavigationProp {}

const Menu: React.FC<MenuProps> = ({navigation}) => {
  return (
    <View>
      <Button
        title={'Klasyczny'}
        onPress={navigateAction(navigation, Routes.FREEPLAY)}
      />

      <Button
        title={'Ustawka'}
        onPress={navigateAction(navigation, Routes.BATTLE_MODE)}
      />

      <Button
        title={'Setajngsy'}
        onPress={navigateAction(navigation, Routes.SETTINGS)}
      />

      <Button
        title={'Halp plox'}
        onPress={navigateAction(navigation, Routes.ONBOARDING)}
      />
    </View>
  );
};

export default Menu;
