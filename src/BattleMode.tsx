import React from 'react';
import {View} from 'react-native';
import Button from 'app/components/button';
import {WithNavigationProp} from 'app/navigation';
import Text from 'app/components/text';

interface BattleModeProps extends WithNavigationProp {}

const BattleMode: React.FC<BattleModeProps> = ({navigation}) => {
  return (
    <View>
      <Text>BattleModey</Text>
      <Button title={'Back'} onPress={navigation.goBack} />
    </View>
  );
};

export default BattleMode;
