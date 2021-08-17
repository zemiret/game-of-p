import {ViewStyle} from 'react-native';
import {Colors} from 'app/styles/colors';

interface LayoutTypes {
  container: ViewStyle;
  centered: ViewStyle;
  padded: ViewStyle;
}

export const Layouts: LayoutTypes = {
  container: {
    flex: 1,
    backgroundColor: Colors.accent,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  padded: {
    padding: 32,
  },
};
