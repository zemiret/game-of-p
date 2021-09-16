import React, {useEffect} from 'react';
import {View} from 'react-native';
import IconButton from 'app/components/IconButton';
import {navigateAction, Routes} from 'app/navigation';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {useDispatch, useSelector} from 'app/state/hooks';
import {
  bumpWordChallenge,
  init,
  selectCountdownTime,
  selectCurrentTeamForDisplay,
  selectTotalRoundNumberForDisplay,
} from 'app/battleMode/state';
import {selectSettings} from 'app/settings/state';
import Text from 'app/components/Text';

const BattleModeInit: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const settings = useSelector(selectSettings);
  const currentTeam = useSelector(selectCurrentTeamForDisplay);
  const timer = useSelector(selectCountdownTime);
  const roundNumber = useSelector(selectTotalRoundNumberForDisplay);

  useEffect(() => {
    dispatch(init(settings));
    dispatch(bumpWordChallenge());
  }, [dispatch, settings]);

  return (
    <View>
      <IconButton onPress={navigation.goBack} name={'arrowleft'} size={70} />
      <Text>Rozpoczyna: {currentTeam}</Text>
      <Text>Liczba rund: {roundNumber}</Text>
      <Text>Czas na rundę: {timer}</Text>
      <Button
        title={'Start'}
        onPress={navigateAction(navigation, Routes.BATTLE_MODE_WORD_CHALLENGE)}
      />
    </View>
  );
};

export default BattleModeInit;
