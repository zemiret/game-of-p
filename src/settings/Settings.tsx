import React from 'react';
import {View} from 'react-native';
import Button from 'app/components/Button';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';
import LabeledInput from 'app/components/LabeledInput';
import {
  selectBattleModeRoundNumber,
  selectBattleModeRoundTime,
  setBattleModeRoundNumber,
  setBattleModeRoundTime,
} from 'app/settings/state';
import {useDispatch, useSelector} from 'app/state/hooks';

const Settings: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const battleModeRoundTime = useSelector(selectBattleModeRoundTime);
  const battleModeRoundNumber = useSelector(selectBattleModeRoundNumber);

  // TODO: WTF THAT LABELEDINPUT? (When flex set, does not display at all)

  const onRoundTimeChange = (value: string) => {
    dispatch(setBattleModeRoundTime(Number(value)));
  };

  const onRoundNumberChange = (value: string) => {
    dispatch(setBattleModeRoundNumber(Number(value)));
  };

  return (
    <View>
      <Text>Settingsy</Text>
      <Button title={'Back'} onPress={navigation.goBack} />

      <Text>Ustawka</Text>
      <LabeledInput
        text={'Ilość rund'}
        value={String(battleModeRoundNumber)}
        keyboardType={'number-pad'}
        onChangeText={onRoundNumberChange}
      />
      <LabeledInput
        text={'Czas rundy'}
        value={String(battleModeRoundTime)}
        keyboardType={'number-pad'}
        onChangeText={onRoundTimeChange}
      />
    </View>
  );
};

export default Settings;
