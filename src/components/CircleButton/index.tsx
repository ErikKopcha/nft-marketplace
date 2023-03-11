import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { styles } from './styles';

interface ICircleButton {
  imgUrl: any;
  handlePress: () => void;
  top?: number;
  right?: number;
  left?: number;
  bottom?: number;
}

const CircleButton = ({
  imgUrl,
  handlePress,
  ...props
}: ICircleButton): React.ReactElement => {
  return (
    <TouchableOpacity
      style={{
        ...styles.touchableOpacity,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="cover"
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;
