import { IBid } from '@app/types';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { EthPrice } from '../SubInfo';
import { styles } from './styles';

interface IDetailsBid {
  bid: IBid;
}

const DetailsBid = ({ bid }: IDetailsBid): React.ReactElement => {
  return (
    <View style={styles.container}>
      <Image source={bid.image} resizeMode={'contain'} />

      <View>
        <Text style={styles.bidName}>Bid placed by {bid.name}</Text>
        <Text style={styles.bidDate}>{bid.date}</Text>
      </View>

      <EthPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
