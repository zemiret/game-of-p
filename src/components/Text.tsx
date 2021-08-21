import React, {PropsWithChildren} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text as ReactText,
  TextStyle,
} from 'react-native';
import {Typography} from 'app/styles';

type TextProps = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
}>;

const Text: React.FC<TextProps> = props => (
  <ReactText style={[styles.text, props.style]}>{props.children}</ReactText>
);

const styles = StyleSheet.create({
  text: {
    ...Typography.defaultFont,
    ...Typography.primary,
  },
});

export default Text;
