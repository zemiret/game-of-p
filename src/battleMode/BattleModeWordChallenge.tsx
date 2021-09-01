import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layouts} from 'app/styles';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {navigateAction, Routes} from 'app/navigation';

const BattleModeWordChallenge: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.outerContainer}>
      <Text>Word challenge</Text>

      <Button
        title={'Udało się'}
        onPress={navigateAction(navigation, Routes.BATTLE_MODE_SUMMARY)}
      />

      <Button
        title={'Poddaj się'}
        onPress={navigateAction(navigation, Routes.BATTLE_MODE_SUMMARY)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    ...Layouts.container,
    ...Layouts.padded(),
  },
});

export default BattleModeWordChallenge;
