import {ViewStyle} from 'react-native';
import {Colors} from 'app/styles/colors';

interface LayoutTypes {
  container: ViewStyle;
  row: ViewStyle;
  rowPullTopSpaceBetween: ViewStyle;
  centered: ViewStyle;
  pullDownCenter: ViewStyle;
  pullDownRight: ViewStyle;
  pullDownLeft: ViewStyle;
  pullTopRight: ViewStyle;
  pullTopLeft: ViewStyle;
  padded: (space?: number) => ViewStyle;
  marginBottom: (space?: number) => ViewStyle;
  selfCenter: ViewStyle;
  alignCenter: ViewStyle;
  justifySpaceBetween: ViewStyle;
}

export const Spacings = {
  sm: 8,
  md: 16,
  bg: 32,
};

export const Layouts: LayoutTypes = {
  container: {
    flex: 1,
    backgroundColor: Colors.accent,
  },
  row: {
    flexDirection: 'row',
  },
  rowPullTopSpaceBetween: {
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pullDownCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pullDownRight: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  pullDownLeft: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  pullTopRight: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  pullTopLeft: {
    justifyContent: 'flex-start',
    alignContent: 'flex-start',
  },
  padded: (space = Spacings.bg) => ({
    padding: space,
  }),
  marginBottom: (space = Spacings.bg) => ({
    marginBottom: space,
  }),
  selfCenter: {
    alignSelf: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifySpaceBetween: {
    justifyContent: 'space-between',
  },
};
