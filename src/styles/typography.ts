import {TextStyle} from 'react-native';
import {Colors} from 'app/styles/colors';

interface TypographyTypes {
  defaultFont: TextStyle;
  bold: TextStyle;
  white: TextStyle;
  black: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
}

export const Typography: TypographyTypes = {
  white: {
    color: Colors.white,
  },
  black: {
    color: Colors.black,
  },
  defaultFont: {
    fontFamily: 'ProximaNova-Regular',
  },
  bold: {
    fontFamily: 'Proxima Nova Bold',
  },
  h1: {
    fontSize: 36,
  },
  h2: {
    fontSize: 24,
  },
};
