import React from 'react';
import {
  ButtonProps as ReactButtonProps,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Text from 'app/components/text';
import {Buttons, Typography} from 'app/styles';

export const Button: React.FC<ReactButtonProps> = props => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={styles.button}
    onPress={props.onPress}>
    <Text style={styles.buttonText}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    ...Buttons.btn,
    ...Buttons.primary,
    ...Buttons.big,
  },
  buttonText: {
    ...Typography.white,
    ...Typography.h2,
    ...Typography.bold,
  },
});

export default Button;
