import React from 'react';
import { assets } from '@app/constants';
import { Image, StatusBar, View } from 'react-native';
import { CircleButton } from '@app/components';
import { styles } from './styles';
import { INFTCard } from '@app/types';

interface IDetailsHeader {
  data: INFTCard;
  navigation: any;
}

const DetailsHeader = ({
  data,
  navigation,
}: IDetailsHeader): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Image source={data.image} resizeMode="cover" style={styles.image} />

      <CircleButton
        imgUrl={assets.left}
        handlePress={() => navigation.goBack()}
        top={(StatusBar?.currentHeight || 0) + 10}
        left={15}
      />

      <CircleButton
        handlePress={() => console.log('like')}
        imgUrl={assets.heart}
        top={(StatusBar?.currentHeight || 0) + 10}
        right={15}
      />
    </View>
  );
};

export default DetailsHeader;
