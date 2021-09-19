import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Buttons, Colors, Layouts} from 'app/styles';
import {Shadow} from 'react-native-shadow-2';

export interface RoundIconProps {
  name: string;
  size?: number;
  sizeMultiplier?: number;
}

export const RoundIcon: React.FC<RoundIconProps> = props => {
  const size = props.size || 40;
  const sizeMultiplier = props.sizeMultiplier || 0.6;

  return (
    <Shadow distance={size / 20}>
      <View style={Buttons.roundButton(size)}>
        <View style={styles.iconContainer}>
          <Icon
            name={props.name}
            size={Math.floor(size * sizeMultiplier)}
            color={Colors.secondary}
          />
        </View>
      </View>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    ...Layouts.container,
    ...Layouts.centered,
    backgroundColor: Colors.transparent,
  },
});

export default RoundIcon;
