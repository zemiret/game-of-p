import React, {PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, TextStyle, TouchableOpacity} from 'react-native';
import Text from 'app/components/Text';
import {Typography} from 'app/styles';

type TextProps = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
  text: string;
  onPress: () => any;
}>;

export const Link: React.FC<TextProps> = props => {
  return (
    <TouchableOpacity activeOpacity={0.6} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    ...Typography.secondary,
    ...Typography.baseSize,
    ...Typography.underline,
  },
});

export default Link;
