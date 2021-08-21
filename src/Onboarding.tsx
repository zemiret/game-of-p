import React from 'react';
import {View} from 'react-native';
import Button from 'app/components/Button';
import {WithNavigationProp} from 'app/navigation';
import Text from 'app/components/Text';

interface OnboardingProps extends WithNavigationProp {}

const Onboarding: React.FC<OnboardingProps> = ({navigation}) => {
  return (
    <View>
      <Text>Onboardingy</Text>
      <Button title={'Back'} onPress={navigation.goBack} />
    </View>
  );
};

export default Onboarding;
