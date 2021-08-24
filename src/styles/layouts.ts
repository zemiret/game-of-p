import {ViewStyle} from 'react-native';
import {Colors} from 'app/styles/colors';

interface LayoutTypes {
  container: ViewStyle;
  centered: ViewStyle;
  pullCenterDown: ViewStyle;
  pullTopRight: ViewStyle;
  padded: (space?: number) => ViewStyle;
  marginBottom: (space?: number) => ViewStyle;
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
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  pullCenterDown: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  pullTopRight: {
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  padded: (space = Spacings.bg) => ({
    padding: space,
  }),
  marginBottom: (space = Spacings.bg) => ({
    marginBottom: space,
  }),
};
