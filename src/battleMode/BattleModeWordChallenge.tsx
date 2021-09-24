import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors, Layouts, Spacings, Typography} from 'app/styles';
import Text from 'app/components/Text';
import {useNavigation, useRoute} from '@react-navigation/native';
import Button from 'app/components/Button';
import {
  navigateAction,
  NavigationProp,
  NavigationRouteProp,
  Routes,
} from 'app/navigation';
import {
  bumpScore,
  selectBlueTeamDetails,
  selectCountdownTime,
  selectIsLastTurn,
  selectRedTeamDetails,
  Team,
} from 'app/battleMode/state';
import {useDispatch, useSelector} from 'app/state/hooks';
import Link from 'app/components/Link';
import Icon from 'react-native-vector-icons/AntDesign';
import {teamBorder} from 'app/battleMode/styles';

const BattleModeWordChallenge: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<Routes.BATTLE_MODE_WORD_CHALLENGE>>();
  const route =
    useRoute<NavigationRouteProp<Routes.BATTLE_MODE_WORD_CHALLENGE>>();
  const dispatch = useDispatch();

  const isLastTurn = useSelector(selectIsLastTurn);
  const totalCountdownTime = useSelector(selectCountdownTime);
  const currentTeam = route.params.team;

  const redTeamState = useSelector(selectRedTeamDetails);
  const blueTeamState = useSelector(selectBlueTeamDetails);

  const getWord = (team: Team): string => {
    return team === Team.RED
      ? redTeamState.wordList[redTeamState.turnNumber]
      : blueTeamState.wordList[blueTeamState.turnNumber];
  };

  const [countdownTime, setCountdownTime] = useState(totalCountdownTime);
  const [countdownInterval, setCountdownInterval] = useState<NodeJS.Timer>();
  const [endTurnHandled, setEndTurnHandled] = useState(false);

  // scren enter
  useEffect(() => {
    return navigation.addListener('transitionEnd', e => {
      if (!e.data.closing) {
        setEndTurnHandled(false);
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
    dispatch(
      bumpScore({
        endForTeam: currentTeam,
        guessed: success,
      }),
    );

    setEndTurnHandled(true);

    if (isLastTurn) {
      navigateAction(navigation, Routes.BATTLE_MODE_FINAL_SUMMARY)();
    } else {
      navigation.navigate({
        name: Routes.BATTLE_MODE_SUMMARY,
        params: {
          endTurnFor: currentTeam,
        },
      });
    }
  };

  useEffect(() => {
    if (countdownTime <= 0) {
      // TODO: REVISE END TURN - there is a problem like this (when you get back it instantly finishes turn)
      // dispatch(endTurn(false));
      // setTurnEndSwitch(s => !s);
      // handleEndTurn(false);
    }
  }, [countdownTime]);

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
        <Text style={styles.mainText}>{getWord(currentTeam)}</Text>
      </View>

      <View style={styles.sectionContainer}>
        <Button
          title={'Udało się'}
          onPress={() => handleEndTurn(true)}
          disabled={endTurnHandled}
        />
        <View style={styles.spacer} />
        <Button
          title={'Poddaj się'}
          onPress={() => handleEndTurn(false)}
          disabled={endTurnHandled}
        />
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
