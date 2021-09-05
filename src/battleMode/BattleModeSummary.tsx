import React from 'react';
import {View} from 'react-native';
import Text from 'app/components/Text';
import {navigateAction, Routes} from 'app/navigation';
import {useNavigation} from '@react-navigation/native';
import {
  selectBlueTeamDetails,
  selectCurrentTeam,
  selectRedTeamDetails,
  selectRoundNumberForDisplay,
  selectTotalRoundNumberForDisplay,
} from 'app/battleMode/state';
import Button from 'app/components/Button';
import {useSelector} from 'app/state/hooks';

const BattleModeSummary: React.FC = () => {
  const navigation = useNavigation();

  const roundNumber = useSelector(selectRoundNumberForDisplay);
  const totalRoundNumber = useSelector(selectTotalRoundNumberForDisplay);
  const currentTeam = useSelector(selectCurrentTeam);
  const redTeam = useSelector(selectRedTeamDetails);
  const blueTeam = useSelector(selectBlueTeamDetails);

  return (
    <View>
      <Text>
        Round: {roundNumber}/{totalRoundNumber}
      </Text>
      <Text>{currentTeam}</Text>
      <Text>BLUE: {blueTeam.score}</Text>
      <Text>RED: {redTeam.score}</Text>
      <Button
        title={'Start'}
        onPress={() => {
          navigateAction(navigation, Routes.BATTLE_MODE_WORD_CHALLENGE)();
        }}
      />
    </View>
  );
};

export default BattleModeSummary;
