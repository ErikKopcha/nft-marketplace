import React from 'react';
import { Image, View } from 'react-native';
import { INFTCard } from './types';
import { useNavigation } from '@react-navigation/native';
import { NFTCardStyles } from './styles';
import {
  CircleButton,
  EthPrice,
  NFTTitle,
  RectButton,
  SubInfo,
} from '../index';
import { assets, SIZES } from '../../constants';

const NFTCard = (props: INFTCard): React.ReactElement => {
  const navigation = useNavigation();

  const { image, name, creator, price } = props;

  return (
    <View style={NFTCardStyles.NFTCardContainer}>
      <View style={NFTCardStyles.NFTCardBox}>
        <Image
          source={image}
          resizeMode="cover"
          style={NFTCardStyles.imageStyles}
        />
        <CircleButton
          imgUrl={assets.heart}
          right={10}
          top={10}
          handlePress={() => {}}
        />
      </View>

      <SubInfo />

      <View style={NFTCardStyles.titleContainer}>
        <NFTTitle
          title={name}
          subtitle={creator}
          titleSize={SIZES.large}
          subtitleSize={SIZES.small}
        />

        <View style={NFTCardStyles.priceBox}>
          <EthPrice price={price} />
          <RectButton
            minWidth={120}
            fonrSize={SIZES.font}
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
