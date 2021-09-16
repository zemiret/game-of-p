import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';
import LabeledNumericInput from 'app/components/LabeledNumericInput';
import {
  selectBattleModeRoundNumber,
  selectBattleModeRoundTime,
  setBattleModeRoundNumber,
  setBattleModeRoundTime,
} from 'app/settings/state';
import {useDispatch, useSelector} from 'app/state/hooks';
import {Layouts, Spacings, Typography} from 'app/styles';
import IconButton from 'app/components/IconButton';

const Settings: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const battleModeRoundTime = useSelector(selectBattleModeRoundTime);
  const battleModeRoundNumber = useSelector(selectBattleModeRoundNumber);

  const onRoundTimeChange = (value: number) => {
    dispatch(setBattleModeRoundTime(value));
  };

  const onRoundNumberChange = (value: number) => {
    dispatch(setBattleModeRoundNumber(value));
  };

  return (
    <View style={styles.container}>
      <View>
        <IconButton onPress={navigation.goBack} name={'arrowleft'} size={70} />
        <View style={styles.spacer} />
        <Text style={Typography.h2}>Ustawka</Text>
        <LabeledNumericInput
          text={'Ilość rund'}
          value={battleModeRoundNumber}
          onChange={onRoundNumberChange}
          minValue={1}
          maxValue={10}
          valueType={'integer'}
        />
        <View style={styles.spacer} />
        <LabeledNumericInput
          text={'Czas rundy (s)'}
          value={battleModeRoundTime}
          onChange={onRoundTimeChange}
          minValue={30}
          step={10}
          maxValue={600}
          valueType={'integer'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.padded(),
  },
  spacer: {
    ...Layouts.padded(Spacings.sm),
  },
});

export default Settings;
