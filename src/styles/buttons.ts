import {ViewStyle} from 'react-native';
import {Colors} from 'app/styles/colors';

interface ButtonTypes {
  btn: ViewStyle;
  big: ViewStyle;
  primary: ViewStyle;
  roundButton: (size: number) => ViewStyle;
}

export const Buttons: ButtonTypes = {
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  big: {
    padding: 18,
    width: '80%',
    borderRadius: 14,
  },
  primary: {
    backgroundColor: Colors.secondary,
  },
  roundButton: (size: number): ViewStyle => ({
    width: size,
    height: size,
    borderRadius: Math.ceil(size / 2),
  }),
};
