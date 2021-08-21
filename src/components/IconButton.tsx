import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Buttons, Colors, Layouts} from 'app/styles';
import {Shadow} from 'react-native-shadow-2';

export interface IconButtonProps {
  onPress: () => void;
  name: string;
  size?: number;
}

export const IconButton: React.FC<IconButtonProps> = props => {
  const size = props.size || 40;

  return (
    <Shadow distance={size / 20}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={props.onPress}
        style={Buttons.roundButton(size)}>
        <View style={styles.iconContainer}>
          <Icon name={props.name} size={Math.floor(size * 0.6)} />
        </View>
      </TouchableOpacity>
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

export default IconButton;
