import React from 'react';
import { Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import {
  CircleButton,
  EthPrice,
  NFTTitle,
  RectButton,
  SubInfo,
} from '../index';
import { assets, SIZES } from '@app/constants';
import { INFTCard } from '@app/types';

const NFTCard = (props: INFTCard): React.ReactElement => {
  const navigation = useNavigation();

  const { image, name, creator, price } = props;

  return (
    <View style={styles.NFTCardContainer}>
      <View style={styles.NFTCardBox}>
        <Image source={image} resizeMode="cover" style={styles.imageStyles} />
        <CircleButton
          imgUrl={assets.heart}
          right={10}
          top={10}
          handlePress={() => {}}
        />
      </View>

      <SubInfo />

      <View style={styles.titleContainer}>
        <NFTTitle
          title={name}
          subtitle={creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />

        <View style={styles.priceBox}>
          <EthPrice price={price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            handlePress={() =>
              navigation.navigate('Details' as never, { data: props } as never)
            }
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
