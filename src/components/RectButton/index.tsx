import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface IRectButton {
  minWidth: number;
  fontSize: number;
  handlePress: () => void;
}
const RectButton = ({
  minWidth,
  fontSize,
  handlePress,
  ...props
}: IRectButton): React.ReactElement => {
  return (
    <TouchableOpacity
      style={{
        ...styles.touchableOpacity,
        minWidth,
        ...props,
      }}
      onPress={handlePress}>
      <Text
        style={{
          ...styles.text,
          fontSize,
        }}>
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export default RectButton;
