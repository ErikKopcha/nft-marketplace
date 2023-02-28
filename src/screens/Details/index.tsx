import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import {
  DetailsBid,
  DetailsHeader,
  FocusStatusBar,
  RectButton,
} from '@app/components';
import { SHADOWS, SIZES } from '@app/constants';
import { detailsStyles } from './styles';
import { INFTCard } from '@app/components/NFTCard';

interface IDetails {
  route: {
    params: {
      data: INFTCard;
    };
  };
  navigation: any;
}

const Details = ({ route, navigation }: IDetails | any): React.ReactElement => {
  const { data } = route.params;

  const listHeader = React.useCallback(() => {
    return (
      <React.Fragment>
        <DetailsHeader data={data} navigation={navigation} />
      </React.Fragment>
    );
  }, [data, navigation]);

  return (
    <SafeAreaView style={detailsStyles.container}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />

      <View style={detailsStyles.placeABidButton}>
        <RectButton
          handlePress={() => {}}
          minWidth={170}
          fontSize={SIZES.large}
          {...SHADOWS.dark}
        />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 2 }}
        ListHeaderComponent={listHeader}
      />
    </SafeAreaView>
  );
};

export default Details;
