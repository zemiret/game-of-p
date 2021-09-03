import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Layouts} from 'app/styles';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {navigateAction, Routes} from 'app/navigation';
import {
  endTurn,
  selectCountdownTime,
  selectCurrentWord,
  selectIsLastTurn,
} from 'app/battleMode/state';
import {useDispatch, useSelector} from 'app/state/hooks';

const BattleModeWordChallenge: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const word = useSelector(selectCurrentWord);
  const isLastTurn = useSelector(selectIsLastTurn);
  const countdownTime = useSelector(selectCountdownTime);

  const handleEndTurn = (success: boolean) => {
    dispatch(endTurn(success));
    if (isLastTurn) {
      navigateAction(navigation, Routes.BATTLE_MODE_FINAL_SUMMARY)();
    } else {
      navigateAction(navigation, Routes.BATTLE_MODE_SUMMARY)();
    }
  };

  return (
    <View style={styles.outerContainer}>
      <Text>Word challenge</Text>
      <Text>{countdownTime}</Text>
      <Text>{word}</Text>

      <Button title={'Udało się'} onPress={() => handleEndTurn(true)} />

      <Button title={'Poddaj się'} onPress={() => handleEndTurn(false)} />
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    ...Layouts.container,
    ...Layouts.padded(),
  },
});

export default BattleModeWordChallenge;
