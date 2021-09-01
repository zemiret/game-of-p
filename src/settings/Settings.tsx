import React, {useContext} from 'react';
import {View} from 'react-native';
import Button from 'app/components/Button';
import Text from 'app/components/Text';
import {SettingsActionType, SettingsContext} from 'app/settings/state';
import {useNavigation} from '@react-navigation/native';

const Settings: React.FC = () => {
  const navigation = useNavigation();

  const {state, dispatch} = useContext(SettingsContext);

  return (
    <View>
      <Text>Settingsy</Text>
      <Text>{state.battleModeRoundTime}</Text>
      <Button
        title={'Change'}
        onPress={() =>
          dispatch({
            type: SettingsActionType.SET_BATTLE_MODE_ROUND_TIME,
            payload: 120000,
          })
        }
      />
      <Button title={'Back'} onPress={navigation.goBack} />
    </View>
  );
};

export default Settings;
