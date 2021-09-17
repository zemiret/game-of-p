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
  wordChallenge: string;
  currentTeam: Team;
  totalRoundNumber: number;
  roundNumber: number;
  countdownTime: number;
  [Team.BLUE]: TeamState;
  [Team.RED]: TeamState;
}

const initialState: BattleState = {
  wordChallenge: '',
  currentTeam: Team.RED,
  totalRoundNumber: 0,
  roundNumber: 0,
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

const splitWords = (words: string[]): [string[], string[]] => {
  const halfIdx = Math.floor(words.length / 2);
  return [words.slice(0, halfIdx), words.slice(halfIdx)];
};

export const battleModeSlice = createSlice({
  name: 'battleMode',
  initialState,
  reducers: {
    init(state, action: PayloadAction<SettingsState>) {
      const settings = action.payload;

      state.countdownTime = settings.battleModeRoundTime;
      state.totalRoundNumber = settings.battleModeRoundNumber;

      state.roundNumber = 0;
      state[Team.BLUE].score = 0;
      state[Team.RED].score = 0;
      const [words1, words2] = splitWords(
        Words.selectBatch(action.payload.battleModeRoundNumber * 2),
      );
      state[Team.BLUE].wordList = words1;
      state[Team.RED].wordList = words2;
    },
    countdown(state) {
      state.countdownTime--;
    },
    endTurn(state, action: PayloadAction<boolean>) {
      const guessed = action.payload;
      state[state.currentTeam].turnNumber++;
      if (guessed) {
        state[state.currentTeam].score++;
      }

      if (state[Team.RED].turnNumber === state[Team.BLUE].turnNumber) {
        // end round
        state.roundNumber++;
      }
    },
    bumpSharedTeamState(state) {
      state.wordChallenge =
        state[state.currentTeam].wordList[state.roundNumber];
      state.currentTeam = state.currentTeam === Team.RED ? Team.BLUE : Team.RED;
    },
  },
});

export const {init, countdown, endTurn, bumpSharedTeamState} =
  battleModeSlice.actions;

export default battleModeSlice.reducer;

export const selectBattleMode = (state: RootState) => state.battleMode;

export const selectCurrentTeam = createSelector(
  selectBattleMode,
  state => state.currentTeam,
);

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
  state => state.roundNumber + 1,
);

export const selectTotalRoundNumberForDisplay = createSelector(
  selectBattleMode,
  state => state.totalRoundNumber,
);

export const selectIsLastTurn = createSelector(
  selectBattleMode,
  state => state.roundNumber === state.totalRoundNumber,
);

export const selectCurrentWord = createSelector(
  selectBattleMode,
  state => state.wordChallenge,
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
