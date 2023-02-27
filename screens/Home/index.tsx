import React from 'react';
import { FlatList, SafeAreaView, View } from 'react-native';
import { FocusStatusBar, HomeHeader, NFTCard } from '../../components';
import { COLORS, NFTData } from '../../constants';
import { homeStyles } from './styles';

const Home = (): React.ReactElement => {
  return (
    <SafeAreaView style={homeStyles.safeAreaView}>
      <FocusStatusBar background={COLORS.primary} />
      <View style={homeStyles.viewContainer}>
        <View style={homeStyles.flatListContainer}>
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
        <View style={homeStyles.backgroundBox}>
          <View style={homeStyles.backgroundItemOne} />
          <View style={homeStyles.backgroundItemTwo} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
