import React, {PropsWithChildren, useCallback} from 'react';
import {
  Linking,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import Text from 'app/components/Text';
import {Typography} from 'app/styles';

type TextProps = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
  text: string;
  href: string;
}>;

export const Link: React.FC<TextProps> = props => {
  const openLink = useCallback(async () => {
    await Linking.openURL(props.href);
  }, [props.href]);

  return (
    <TouchableOpacity activeOpacity={0.6} onPress={openLink}>
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
