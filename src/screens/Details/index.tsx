import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import {
  DetailsBid,
  DetailsDescription,
  DetailsHeader,
  FocusStatusBar,
  RectButton,
  SubInfo,
} from '@app/components';
import { SHADOWS, SIZES } from '@app/constants';
import { styles } from './styles';
import { INFTCard } from '@app/types';

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
        <SubInfo />
        <View style={styles.detailsDescContainer}>
          <DetailsDescription data={data} />

          {data.bids.length > 0 && (
            <Text style={styles.bidText}>Current Bids</Text>
          )}
        </View>
      </React.Fragment>
    );
  }, [data, navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <FocusStatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        transLucent={true}
      />

      <View style={styles.placeABidButton}>
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
