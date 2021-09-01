import React, {useContext, useReducer} from 'react';
import {View} from 'react-native';
import Text from 'app/components/Text';
import {SettingsContext} from 'app/settings/state';
import IconButton from 'app/components/IconButton';
import {NavigationRouteProp, Routes} from 'app/navigation';
import {useNavigation, useRoute} from '@react-navigation/native';

const enum Team {
  BLUE = 'BLUE',
  RED = 'RED',
}

// TODO: DEFINE ACTUAL ACTIONS
type Action = {type: 'request'} | {type: 'failure'; error: string};

interface TeamState {
  score: number;
  // wordList should be generated in advance to avoid duplicates
  wordList: string[];
}

interface BattleState {
  currentTeam: Team;
  // in seconds the time left for the current team
  countdownTimer: number;
  [Team.BLUE]: TeamState;
  [Team.RED]: TeamState;
}

const reducer = (state: BattleState, action: Action): BattleState => {
  // TODO: JUST SO THAT COMPILER DOES NOT COMPLAIN
  console.log(action);
  return state;
};

const BattleModeSummary: React.FC = () => {
  const navigation = useNavigation();
  const route = useRoute<NavigationRouteProp<Routes.BATTLE_MODE_SUMMARY>>();

  const showScore = route.params.showScore;

  const settingsCtx = useContext(SettingsContext);
  const settingsState = settingsCtx.state;

  const [state, dispatch] = useReducer(reducer, {
    currentTeam: Team.RED,
    countdownTimer: settingsState.battleModeRoundTime,
    [Team.BLUE]: {
      score: 0,
      wordList: ['elo'], // TOOD: GENERATE
    },
    [Team.RED]: {
      score: 0,
      wordList: ['elo'], // TOOD: GENERATE
    },
  });

  // TODO: JUST SO THAT COMPILER DOES NOT COMPLAIN
  console.log(dispatch);

  return (
    <View>
      <IconButton onPress={navigation.goBack} name={'arrowleft'} size={70} />
      <Text>{state.currentTeam}</Text>
      {showScore && <Text>BLUE: {state[Team.BLUE].score}</Text>}
      {showScore && <Text>RED: {state[Team.RED].score}</Text>}
    </View>
  );
};

export default BattleModeSummary;
