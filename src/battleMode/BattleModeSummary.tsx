import React, {useEffect} from 'react';
import {View} from 'react-native';
import Text from 'app/components/Text';
import {navigateAction, NavigationProp, Routes} from 'app/navigation';
import {useNavigation} from '@react-navigation/native';
import {
  bumpWordChallenge,
  selectBlueTeamDetails,
  selectCurrentTeam,
  selectRedTeamDetails,
  selectRoundNumberForDisplay,
  selectTotalRoundNumberForDisplay,
} from 'app/battleMode/state';
import Button from 'app/components/Button';
import {useDispatch, useSelector} from 'app/state/hooks';
import Link from 'app/components/Link';

const BattleModeSummary: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<Routes.BATTLE_MODE_SUMMARY>>();
  const dispatch = useDispatch();

  const roundNumber = useSelector(selectRoundNumberForDisplay);
  const totalRoundNumber = useSelector(selectTotalRoundNumberForDisplay);
  const currentTeam = useSelector(selectCurrentTeam);
  const redTeam = useSelector(selectRedTeamDetails);
  const blueTeam = useSelector(selectBlueTeamDetails);

  useEffect(() => {
    return navigation.addListener('transitionEnd', () => {
      dispatch(bumpWordChallenge());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

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

      <Link
        text={'Zakończ grę'}
        onPress={navigateAction(navigation, Routes.MENU)}
      />
    </View>
  );
};

export default BattleModeSummary;
