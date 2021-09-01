import React, {useContext} from 'react';
import {View} from 'react-native';
import Text from 'app/components/Text';
import {navigateAction, Routes} from 'app/navigation';
import {useNavigation} from '@react-navigation/native';
import {BattleModeContext, Team} from 'app/battleMode/state';
import Button from 'app/components/Button';

const BattleModeSummary: React.FC = () => {
  const navigation = useNavigation();
  const {state} = useContext(BattleModeContext);

  return (
    <View>
      <Text>{state.currentTeam}</Text>
      <Text>BLUE: {state[Team.BLUE].score}</Text>
      <Text>RED: {state[Team.RED].score}</Text>
      <Button
        title={'Start'}
        onPress={navigateAction(navigation, Routes.BATTLE_MODE_WORD_CHALLENGE)}
      />
    </View>
  );
};

export default BattleModeSummary;
