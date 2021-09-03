import React from 'react';
import {View} from 'react-native';
import Button from 'app/components/Button';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';

const Settings: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Settingsy</Text>
      <Button title={'Back'} onPress={navigation.goBack} />
    </View>
  );
};

export default Settings;
