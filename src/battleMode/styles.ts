import {Colors} from 'app/styles';
import {Team} from 'app/battleMode/state';
import {ViewStyle} from 'react-native';

export const teamColor = (team: Team) =>
  team === Team.BLUE ? Colors.primary : Colors.opposite;

export const teamBorder = (team: Team): ViewStyle => {
  return {
    borderWidth: 10,
    borderColor: teamColor(team),
  };
};
