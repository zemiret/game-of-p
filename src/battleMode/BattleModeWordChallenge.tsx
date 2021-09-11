import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Layouts} from 'app/styles';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {navigateAction, NavigationProp, Routes} from 'app/navigation';
import {
  endTurn,
  selectCountdownTime,
  selectCurrentWord,
  selectIsLastTurn,
} from 'app/battleMode/state';
import {useDispatch, useSelector} from 'app/state/hooks';

const BattleModeWordChallenge: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<Routes.BATTLE_MODE_WORD_CHALLENGE>>();
  const dispatch = useDispatch();

  const word = useSelector(selectCurrentWord);
  const isLastTurn = useSelector(selectIsLastTurn);
  const totalCountdownTime = useSelector(selectCountdownTime);

  const [countdownTime, setCountdownTime] = useState(totalCountdownTime);
  // turnEndSwitch and isInited are only used to trigger end of turn navigation
  // probably can be done much better than this
  const [turnEndSwitch, setTurnEndSwitch] = useState(false);
  const [isInited, setIsInited] = useState(false);
  const [countdownInterval, setCountdownInterval] = useState<NodeJS.Timer>();

  // scren enter
  useEffect(() => {
    return navigation.addListener('transitionEnd', e => {
      if (!e.data.closing) {
        setCountdownTime(totalCountdownTime);

        if (countdownInterval == null) {
          const id = setInterval(() => {
            setCountdownTime(ct => ct - 1);
          }, 1000);
          setCountdownInterval(id);
        }
      }
    });
  }, [navigation, totalCountdownTime, countdownInterval]);

  // scren exit
  useEffect(() => {
    return navigation.addListener('transitionStart', e => {
      if (e.data.closing) {
        if (countdownInterval != null) {
          clearInterval(countdownInterval);
          setCountdownInterval(undefined);
        }
      }
    });
  }, [navigation, countdownInterval]);

  const handleEndTurn = (success: boolean) => {
    dispatch(endTurn(success));
    setTurnEndSwitch(s => !s);
  };

  useEffect(() => {
    if (isInited) {
      if (isLastTurn) {
        navigateAction(navigation, Routes.BATTLE_MODE_FINAL_SUMMARY)();
      } else {
        navigateAction(navigation, Routes.BATTLE_MODE_SUMMARY)();
      }
    } else {
      setIsInited(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [turnEndSwitch]);

  useEffect(() => {
    if (countdownTime <= 0) {
      dispatch(endTurn(false));
      setTurnEndSwitch(s => !s);
    }
  }, [countdownTime, dispatch]);

  return (
    <View style={styles.outerContainer}>
      <Text>Word challenge</Text>
      <Text>Czas: {countdownTime}</Text>
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
