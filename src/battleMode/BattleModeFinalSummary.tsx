import React from 'react';
import {View} from 'react-native';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {navigateAction, Routes} from 'app/navigation';

const BattleModeFinalSummary: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Final summary</Text>

      <Button title={'OK'} onPress={navigateAction(navigation, Routes.MENU)} />
    </View>
  );
};

export default BattleModeFinalSummary;
