import React, { useCallback, useState } from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { COLORS, NFTData } from '@app/constants';
import { styles } from './styles';
import { FocusStatusBar, HomeHeader, NFTCard } from '@app/components';

const Home = (): React.ReactElement => {
  const [nftData, setNftData] = useState(NFTData);

  const onSearch = useCallback((value: string) => {
    if (!value) {
      setNftData(NFTData);
      return;
    }

    const filteredNFT = NFTData.filter(nft =>
      nft.name.toLowerCase().includes(value.toLowerCase()),
    );

    setNftData(filteredNFT);
  }, []);

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FocusStatusBar backgroundColor={COLORS.primary} />
      <View style={styles.viewContainer}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={nftData}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={onSearch} />}
            renderItem={({ item }) => <NFTCard {...item} />}
          />
        </View>
        <View style={styles.backgroundBox}>
          <View style={styles.backgroundItemOne} />
          <View style={styles.backgroundItemTwo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
