import React from 'react';
import {navigateAction, Routes} from 'app/navigation';
import {StyleSheet, View} from 'react-native';
import Button from 'app/components/Button';
import IconButton from 'app/components/IconButton';
import {Icons, Layouts, Spacings, Typography} from 'app/styles';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';

const Menu: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.outerContainer}>
      <View style={styles.settingsIconsContainer}>
        <IconButton
          onPress={navigateAction(navigation, Routes.SETTINGS)}
          name={'setting'}
          size={70}
        />
      </View>

      <View style={styles.onboardingIconContainer}>
        <IconButton
          onPress={navigateAction(navigation, Routes.ONBOARDING)}
          name={'question'}
          size={70}
        />
      </View>

      <View style={styles.bottomSectionContainer}>
        <Text style={[styles.gameTypeHeader, styles.menuItemSpacedMd]}>
          Tryb rozgrywki
        </Text>

        <Button
          title={'Klasyczny'}
          onPress={navigateAction(navigation, Routes.FREEPLAY)}
          style={styles.menuItemSpacedBg}
        />

        <Button
          title={'Ustawka'}
          onPress={navigateAction(navigation, Routes.BATTLE_MODE_INIT)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    ...Layouts.container,
    ...Layouts.padded(),
  },
  topSectionContainer: {
    ...Layouts.container,
    ...Layouts.pullTopRight,
  },
  bottomSectionContainer: {
    ...Layouts.container,
    ...Layouts.pullDownCenter,
    ...Layouts.padded(Spacings.md),
  },
  menuItemSpacedBg: {
    ...Layouts.marginBottom(Spacings.bg),
  },
  menuItemSpacedMd: {
    ...Layouts.marginBottom(Spacings.md),
  },
  gameTypeHeader: {
    ...Typography.h2,
    ...Typography.bold,
  },
  settingsIconsContainer: {
    ...Icons.topRightIconContainer,
  },
  onboardingIconContainer: {
    ...Icons.topRightIconContainer,
    ...Icons.topSpacing(70 + Spacings.md + Spacings.md),
  },
});

export default Menu;
