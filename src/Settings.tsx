import React from 'react';
import {View} from 'react-native';
import Button from 'app/components/Button';
import {WithNavigationProp} from 'app/navigation';
import Text from 'app/components/Text';

interface SettingsProps extends WithNavigationProp {}

const Settings: React.FC<SettingsProps> = ({navigation}) => {
  return (
    <View>
      <Text>Settingsy</Text>
      <Button title={'Back'} onPress={navigation.goBack} />
    </View>
  );
};

export default Settings;
