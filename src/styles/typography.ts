import {TextStyle} from 'react-native';
import {Colors} from 'app/styles/colors';

interface TypographyTypes {
  defaultFont: TextStyle;
  primary: TextStyle;
  bold: TextStyle;
  white: TextStyle;
  black: TextStyle;
  secondary: TextStyle;
  underline: TextStyle;
  h1: TextStyle;
  h2: TextStyle;
  h3: TextStyle;
  h4: TextStyle;
  baseSize: TextStyle;
}

export const Typography: TypographyTypes = {
  defaultFont: {
    fontFamily: 'ProximaNova-Regular',
  },
  primary: {
    color: Colors.primary,
  },
  secondary: {
    color: Colors.secondary,
  },
  white: {
    color: Colors.white,
  },
  black: {
    color: Colors.black,
  },
  bold: {
    fontFamily: 'Proxima Nova Bold',
  },
  underline: {
    textDecorationLine: 'underline',
  },
  h1: {
    fontSize: 36,
  },
  h2: {
    fontSize: 24,
  },
  h3: {
    fontSize: 20,
  },
  h4: {
    fontSize: 16,
  },
  baseSize: {
    fontSize: 14,
  },
};
