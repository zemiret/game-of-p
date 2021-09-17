import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'app/components/Text';
import {navigateAction, NavigationProp, Routes} from 'app/navigation';
import {useNavigation} from '@react-navigation/native';
import {
  bumpSharedTeamState,
  selectBlueTeamDetails,
  selectCurrentTeam,
  selectRedTeamDetails,
  selectRoundNumberForDisplay,
  selectTotalRoundNumberForDisplay,
  Team,
} from 'app/battleMode/state';
import Button from 'app/components/Button';
import {useDispatch, useSelector} from 'app/state/hooks';
import Link from 'app/components/Link';
import {Colors, Layouts, Spacings, Typography} from 'app/styles';
import {teamBorder, teamColor} from 'app/battleMode/styles';

const BattleModeSummary: React.FC = () => {
  const navigation =
    useNavigation<NavigationProp<Routes.BATTLE_MODE_SUMMARY>>();
  const dispatch = useDispatch();

  const roundNumber = useSelector(selectRoundNumberForDisplay);
  const totalRoundNumber = useSelector(selectTotalRoundNumberForDisplay);
  const currentTeam = useSelector(selectCurrentTeam);
  const redTeam = useSelector(selectRedTeamDetails);
  const blueTeam = useSelector(selectBlueTeamDetails);

  const nextTeamDisplayName =
    currentTeam === Team.BLUE ? 'Niebieskich' : 'Czerwonych';

  useEffect(() => {
    return navigation.addListener('transitionEnd', () => {
      dispatch(bumpSharedTeamState());
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigation]);

  return (
    <View style={[styles.outerContainer, teamBorder(currentTeam)]}>
      <View style={styles.sectionContainer}>
        <Text style={{color: Colors.secondary}}>
          Runda: {roundNumber}/{totalRoundNumber}
        </Text>
        <Text style={styles.label}>Teraz kolej</Text>
        <Text style={[styles.infoText, {color: teamColor(currentTeam)}]}>
          {nextTeamDisplayName}
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Niebiescy: </Text>
          <Text style={styles.infoText}>{blueTeam.score}</Text>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.label}>Czerwoni: </Text>
          <Text style={styles.infoText}>{redTeam.score}</Text>
        </View>
      </View>

      <View style={styles.sectionContainer}>
        <Button
          title={'Start'}
          onPress={() => {
            navigateAction(navigation, Routes.BATTLE_MODE_WORD_CHALLENGE)();
          }}
        />
        <View style={styles.spacer} />
        <Link
          text={'Zakończ grę'}
          onPress={navigateAction(navigation, Routes.MENU)}
        />
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
  infoContainer: {
    ...Layouts.row,
    ...Layouts.alignCenter,
  },
  label: {
    ...Typography.h3,
  },
  infoText: {
    ...Typography.h2,
    ...Typography.bold,
  },
  spacer: {
    ...Layouts.padded(Spacings.sm),
  },
});

export default BattleModeSummary;
