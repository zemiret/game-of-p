import React from 'react';
import {
  ButtonProps as ReactButtonProps,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import Text from 'app/components/Text';
import {Buttons, Typography} from 'app/styles';

interface ButtonProps extends ReactButtonProps {
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = props => (
  <TouchableOpacity
    activeOpacity={0.8}
    style={[styles.button, props.style]}
    onPress={props.onPress}
    disabled={props.disabled}>
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
