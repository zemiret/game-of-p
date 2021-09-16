import React from 'react';
import {StyleSheet, View} from 'react-native';
import Text from 'app/components/Text';
import {Colors, Layouts, Typography} from 'app/styles';
import NumericInput, {INumericInputProps} from 'react-native-numeric-input';

interface Props extends INumericInputProps {
  text: string;
}

export const LabeledNumericInput: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.text}</Text>
      <NumericInput
        {...props}
        type="plus-minus"
        rounded
        separatorWidth={0}
        leftButtonBackgroundColor={Colors.secondary}
        rightButtonBackgroundColor={Colors.secondary}
        // @ts-ignore
        iconStyle={{color: Colors.white}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Layouts.row,
    ...Layouts.rowPullTopSpaceBetween,
  },
  text: {
    ...Typography.secondary,
    ...Typography.baseSize,
    ...Layouts.selfCenter,
  },
});

export default LabeledNumericInput;
