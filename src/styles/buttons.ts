import {ViewStyle} from 'react-native';
import {Colors} from 'app/styles/colors';

interface ButtonTypes {
  btn: ViewStyle;
  big: ViewStyle;
  rounded: ViewStyle;
  primary: ViewStyle;
}

export const Buttons: ButtonTypes = {
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    padding: 18,
    width: '100%',
  },
  rounded: {
    borderRadius: 10,
  },
  primary: {
    backgroundColor: Colors.secondary,
  },
};
