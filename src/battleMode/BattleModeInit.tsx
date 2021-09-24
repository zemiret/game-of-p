import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import IconButton from 'app/components/IconButton';
import {Routes} from 'app/navigation';
import {useNavigation} from '@react-navigation/native';
import Button from 'app/components/Button';
import {useDispatch, useSelector} from 'app/state/hooks';
import {
  init,
  selectCountdownTime,
  selectTotalRoundNumberForDisplay,
  Team,
} from 'app/battleMode/state';
import {selectSettings} from 'app/settings/state';
import Text from 'app/components/Text';
import {Layouts, Typography} from 'app/styles';
import {teamBorder, teamColor} from 'app/battleMode/styles';

const BattleModeInit: React.FC = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const settings = useSelector(selectSettings);

  const currentTeam = Math.random() < 0.5 ? Team.BLUE : Team.RED; // random currentTeam
  const roundTime = useSelector(selectCountdownTime);
  const roundNumber = useSelector(selectTotalRoundNumberForDisplay);

  const displayTeamName = currentTeam === Team.BLUE ? 'Niebiescy' : 'Czerwoni';

  useEffect(() => {
    dispatch(init(settings));
  }, [dispatch, settings]);

  return (
    <View style={[styles.outerContainer, teamBorder(currentTeam)]}>
      <IconButton onPress={navigation.goBack} name={'arrowleft'} size={70} />
      <View style={styles.sectionContainer}>
        <Text style={styles.label}>Rozpoczynają</Text>
        <Text style={[styles.infoText, {color: teamColor(currentTeam)}]}>
          {displayTeamName}
        </Text>
      </View>

      <View style={styles.sectionContainer}>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Liczba rund: </Text>
          <Text style={styles.infoText}>{roundNumber}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.label}>Czas na rundę: </Text>
          <Text style={styles.infoText}>{roundTime}s</Text>
        </View>
      </View>
      <View style={styles.sectionContainer}>
        <Button
          title={'Start'}
          onPress={() =>
            navigation.navigate({
              name: Routes.BATTLE_MODE_WORD_CHALLENGE,
              params: {
                team: currentTeam,
              },
            })
          }
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

export default BattleModeInit;
