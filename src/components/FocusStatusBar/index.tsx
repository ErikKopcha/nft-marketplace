import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import { useIsFocused } from '@react-navigation/native';

interface IFocusStatusBar {
  backgroundColor: string;
  barStyle?: StatusBarStyle;
  transLucent?: boolean;
}

const FocusStatusBar = (props: IFocusStatusBar): React.ReactElement | null => {
  const isFocused = useIsFocused();

  if (isFocused) {
    return <StatusBar animated={true} {...props} />;
  }

  return null;
};

export default FocusStatusBar;
