import React from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';
import Text from 'app/components/Text';
import {Layouts, Typography} from 'app/styles';

interface Props {
  text: string;
  keyboardType?: KeyboardTypeOptions;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
}

export const LabeledInput: React.FC<Props> = props => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>{props.text}</Text>
        <TextInput
          keyboardType={props.keyboardType}
          value={props.value}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layouts.container,
    ...Layouts.row,
  },
  text: {
    ...Typography.secondary,
    ...Typography.baseSize,
    ...Typography.underline,
  },
});

export default LabeledInput;
