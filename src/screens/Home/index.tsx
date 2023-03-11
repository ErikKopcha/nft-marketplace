import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { COLORS, NFTData } from '@app/constants';
import { styles } from './styles';
import { FocusStatusBar, HomeHeader, NFTCard } from '@app/components';

const Home = (): React.ReactElement => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <FocusStatusBar backgroundColor={COLORS.primary} />
      <View style={styles.viewContainer}>
        <View style={styles.flatListContainer}>
          <FlatList
            data={NFTData}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={
              <HomeHeader
                onSearch={value => {
                  console.log(value);
                }}
              />
            }
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
