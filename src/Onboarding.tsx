import React from 'react';
import {StyleSheet} from 'react-native';
import {navigateAction, Routes, WithNavigationProp} from 'app/navigation';
import Text from 'app/components/Text';
import OnboardingPages from 'react-native-onboarding-swiper';
import {Colors, Typography} from 'app/styles';

interface OnboardingProps extends WithNavigationProp {}

const Onboarding: React.FC<OnboardingProps> = ({navigation}) => {
  return (
    <OnboardingPages
      pages={[
        {
          backgroundColor: Colors.white,
          title: <Text style={styles.title}>Onboarding</Text>,
          image: <Text>Imydż</Text>,
          subtitle: <Text style={styles.subtitle}>Sub</Text>,
        },
        {
          backgroundColor: Colors.white,
          title: <Text style={styles.title}>Onboarding</Text>,
          image: <Text>Imydż 2</Text>,
          subtitle: <Text style={styles.subtitle}>Sub</Text>,
        },
      ]}
      onDone={navigateAction(navigation, Routes.MENU)}
      skipLabel={'Pomiń'}
      nextLabel={'Dalej'}
    />
  );
};

const styles = StyleSheet.create({
  title: {
    ...Typography.h1,
  },
  subtitle: {
    ...Typography.h4,
    color: Colors.secondary,
  },
});

export default Onboarding;
