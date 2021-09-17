import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'app/components/Text';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {navigateAction, Routes} from 'app/navigation';
import {useSelector} from 'app/state/hooks';
import {
  selectBlueTeamDetails,
  selectRedTeamDetails,
  selectWinner,
  Team,
} from 'app/battleMode/state';
import {Layouts, Typography} from 'app/styles';
import {teamColor} from 'app/battleMode/styles';

const BattleModeFinalSummary: React.FC = () => {
  const navigation = useNavigation();

  const winner = useSelector(selectWinner);
  const redTeam = useSelector(selectRedTeamDetails);
  const blueTeam = useSelector(selectBlueTeamDetails);

  const winnerDisplayName = winner === Team.BLUE ? 'Niebiescy' : 'Czerwoni';

  return (
    <View style={styles.outerContainer}>
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

      {(winner == null && (
        <View style={styles.sectionContainer}>
          <Text style={styles.infoText}>Remis</Text>
        </View>
      )) || (
        <View style={styles.sectionContainer}>
          <Text style={styles.label}>Zwyciężają</Text>
          <Text style={[styles.infoText, {color: teamColor(winner!)}]}>
            {winnerDisplayName}
          </Text>
        </View>
      )}

      <View style={styles.sectionContainer}>
        <Button
          title={'OK'}
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
});

export default BattleModeFinalSummary;
