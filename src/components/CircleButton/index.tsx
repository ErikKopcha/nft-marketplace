import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { circleButtonStyles } from './styles';

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
        ...circleButtonStyles.touchableOpacity,
        ...props,
      }}
      onPress={handlePress}>
      <Image
        source={imgUrl}
        resizeMode="cover"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;
