import React from 'react';
import {navigateAction, Routes, WithNavigationProp} from 'app/navigation';
import {View} from 'react-native';
import Button from 'app/components/Button';
import IconButton from 'app/components/IconButton';

interface MenuProps extends WithNavigationProp {}

const Menu: React.FC<MenuProps> = ({navigation}) => {
  return (
    <View>
      <IconButton
        onPress={navigateAction(navigation, Routes.SETTINGS)}
        name={'setting'}
        size={70}
      />
      <IconButton
        onPress={navigateAction(navigation, Routes.ONBOARDING)}
        name={'question'}
        size={70}
      />

      <Button
        title={'Klasyczny'}
        onPress={navigateAction(navigation, Routes.FREEPLAY)}
      />

      <Button
        title={'Ustawka'}
        onPress={navigateAction(navigation, Routes.BATTLE_MODE)}
      />
    </View>
  );
};

export default Menu;
