import React from 'react';
import {View} from 'react-native';
import Button from 'app/components/button';
import {WithNavigationProp} from 'app/navigation';
import Text from 'app/components/text';

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
