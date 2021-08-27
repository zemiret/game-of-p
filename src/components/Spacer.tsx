import React from 'react';
import {View} from 'react-native';

interface SpacerProps {
  spacing: number;
}

const Spacer: React.FC<SpacerProps> = props => (
  <View
    style={{
      marginBottom: props.spacing,
    }}
  />
);

export default Spacer;
