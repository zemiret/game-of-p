import React from 'react';
import {View} from 'react-native';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {navigateAction, Routes} from 'app/navigation';
import {useSelector} from 'app/state/hooks';
import {
  selectBlueTeamDetails,
  selectRedTeamDetails,
  selectWinner,
} from 'app/battleMode/state';

const BattleModeFinalSummary: React.FC = () => {
  const navigation = useNavigation();

  const winner = useSelector(selectWinner);
  const redTeam = useSelector(selectRedTeamDetails);
  const blueTeam = useSelector(selectBlueTeamDetails);

  return (
    <View>
      <Text>WINNER: {winner}</Text>
      <Text>BLUE: {blueTeam.score}</Text>
      <Text>RED: {redTeam.score}</Text>
      <Button title={'OK'} onPress={navigateAction(navigation, Routes.MENU)} />
    </View>
  );
};

export default BattleModeFinalSummary;
