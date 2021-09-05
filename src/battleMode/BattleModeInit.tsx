import React, {useEffect} from 'react';
import {View} from 'react-native';
import IconButton from 'app/components/IconButton';
import {navigateAction, Routes} from 'app/navigation';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {useDispatch, useSelector} from 'app/state/hooks';
import {
  init,
  selectCountdownTime,
  selectCurrentTeam,
} from 'app/battleMode/state';
import {selectSettings} from 'app/settings/state';
import Text from 'app/components/Text';

const BattleModeInit: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const settings = useSelector(selectSettings);
  const currentTeam = useSelector(selectCurrentTeam);
  const timer = useSelector(selectCountdownTime);

  useEffect(() => {
    dispatch(init(settings));
  }, [dispatch, settings]);

  return (
    <View>
      <IconButton onPress={navigation.goBack} name={'arrowleft'} size={70} />
      <Text>{currentTeam}</Text>
      <Text>{timer}</Text>
      <Button
        title={'Start'}
        onPress={navigateAction(navigation, Routes.BATTLE_MODE_WORD_CHALLENGE)}
      />
    </View>
  );
};

export default BattleModeInit;
