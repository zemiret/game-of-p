import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Layouts, Spacings, Typography} from 'app/styles';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {navigateAction, NavigationProp, Routes} from 'app/navigation';
import {
  endTurn,
  selectCountdownTime,
  selectCurrentTeam,
  selectCurrentWord,
  selectIsLastTurn,
} from 'app/battleMode/state';
import {useDispatch, useSelector} from 'app/state/hooks';
import Link from 'app/components/Link';
import Icon from 'react-native-vector-icons/AntDesign';
import {teamBorder} from 'app/battleMode/styles';

const BattleModeWordChallenge: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<Routes.BATTLE_MODE_WORD_CHALLENGE>>();
  const dispatch = useDispatch();

  const word = useSelector(selectCurrentWord);
  const isLastTurn = useSelector(selectIsLastTurn);
  const totalCountdownTime = useSelector(selectCountdownTime);
  const currentTeam = useSelector(selectCurrentTeam);

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

  const quitToMenu = () => {
    navigateAction(navigation, Routes.MENU)();
    if (countdownInterval != null) {
      clearInterval(countdownInterval);
    }
  };

  return (
    <View style={[styles.outerContainer, teamBorder(currentTeam)]}>
      <View style={styles.sectionContainer}>
        <Icon name={'clockcircleo'} color={Colors.secondary} />
        <Text style={styles.timeText}>{countdownTime}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Text style={styles.mainText}>{word}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Button title={'Udało się'} onPress={() => handleEndTurn(true)} />
        <View style={styles.spacer} />
        <Button title={'Poddaj się'} onPress={() => handleEndTurn(false)} />
        <View style={styles.spacer} />
        <Link text={'Zakończ grę'} onPress={quitToMenu} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    ...Layouts.container,
    ...Layouts.padded(),
    ...Layouts.justifySpaceBetween,
  },
  sectionContainer: {
    ...Layouts.alignCenter,
  },
  mainText: {
    ...Typography.h1,
    ...Typography.bold,
  },
  spacer: {
    ...Layouts.padded(Spacings.sm),
  },
  timeText: {
    ...Typography.h3,
    color: Colors.secondary,
  },
});

export default BattleModeWordChallenge;
