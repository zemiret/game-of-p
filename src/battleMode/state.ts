import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {SettingsState} from 'app/settings/state';
import {Words} from 'app/services/words';
import {RootState} from 'app/state/store';

export const enum Team {
  BLUE = 'BLUE',
  RED = 'RED',
}

export interface TeamState {
  turnNumber: number;
  score: number;
  // wordList should be generated in advance to avoid duplicates
  wordList: string[];
}

export interface BattleState {
  totalRoundNumber: number;
  countdownTime: number;
  [Team.BLUE]: TeamState;
  [Team.RED]: TeamState;
}

const initialState: BattleState = {
  totalRoundNumber: 0,
  countdownTime: 0,
  [Team.BLUE]: {
    turnNumber: 0,
    score: 0,
    wordList: [],
  },
  [Team.RED]: {
    turnNumber: 0,
    score: 0,
    wordList: [],
  },
};

interface EndTurnPayload {
  guessed: boolean;
  endForTeam: Team;
}

const splitWords = (words: string[]): [string[], string[]] => {
  const halfIdx = Math.floor(words.length / 2);
  return [words.slice(0, halfIdx), words.slice(halfIdx)];
};

export const oppositeTeam = (team: Team): Team => {
  return team === Team.RED ? Team.BLUE : Team.RED;
};

export const battleModeSlice = createSlice({
  name: 'battleMode',
  initialState,
  reducers: {
    init(state, action: PayloadAction<SettingsState>) {
      const settings = action.payload;

      state.totalRoundNumber = settings.battleModeRoundNumber;
      state.countdownTime = settings.battleModeRoundTime;

      const [words1, words2] = splitWords(
        Words.selectBatch(action.payload.battleModeRoundNumber * 2),
      );

      // state.roundNumber = 0;
      state[Team.BLUE].score = 0;
      state[Team.BLUE].turnNumber = 0;
      state[Team.BLUE].wordList = words1;

      state[Team.RED].score = 0;
      state[Team.RED].turnNumber = 0;
      state[Team.RED].wordList = words2;
    },
    bumpScore(state, action: PayloadAction<EndTurnPayload>) {
      const guessed = action.payload.guessed;
      const forTeam = action.payload.endForTeam;

      if (guessed) {
        state[forTeam].score++;
      }
    },
    bumpTurnNumber(state, action: PayloadAction<Team>) {
      state[action.payload].turnNumber++;
    },
  },
});

export const {init, bumpScore, bumpTurnNumber} = battleModeSlice.actions;

export default battleModeSlice.reducer;

export const selectBattleMode = (state: RootState) => state.battleMode;

export const selectRedTeamDetails = createSelector(
  selectBattleMode,
  state => state[Team.RED],
);

export const selectBlueTeamDetails = createSelector(
  selectBattleMode,
  state => state[Team.BLUE],
);

export const selectCountdownTime = createSelector(
  selectBattleMode,
  state => state.countdownTime,
);

export const selectRoundNumberForDisplay = createSelector(
  selectBattleMode,
  state => {
    const roundNumber =
      state[Team.RED].turnNumber < state[Team.BLUE].turnNumber
        ? state[Team.RED].turnNumber
        : state[Team.BLUE].turnNumber;
    return roundNumber + 1;
  },
);

export const selectTotalRoundNumberForDisplay = createSelector(
  selectBattleMode,
  state => state.totalRoundNumber,
);

// Technically both need to be equal to total round number
// But since turn will be updated after word challenge it means only one of them is enough.
export const selectIsLastTurn = createSelector(
  selectBattleMode,
  state =>
    state[Team.RED].turnNumber === state.totalRoundNumber ||
    state[Team.BLUE].turnNumber === state.totalRoundNumber,
);

export const selectWinner = createSelector(selectBattleMode, state => {
  if (state[Team.BLUE].score > state[Team.RED].score) {
    return Team.BLUE;
  } else if (state[Team.RED].score > state[Team.BLUE].score) {
    return Team.RED;
  } else {
    return null;
  }
});
