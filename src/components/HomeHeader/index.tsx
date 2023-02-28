import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { homeHeaderStyles } from './styles';
import { assets, SIZES } from '@app/constants';

const HomeHeader = ({
  onSearch,
}: {
  onSearch: (inputValue: string) => void;
}): React.ReactElement => {
  return (
    <View style={homeHeaderStyles.container}>
      <View style={homeHeaderStyles.imageContainer}>
        <Image
          style={homeHeaderStyles.image}
          source={assets.logo}
          resizeMode="contain"
        />

        <View style={homeHeaderStyles.subImageContainer}>
          <Image
            style={homeHeaderStyles.subImage}
            source={assets.person01}
            resizeMode="contain"
          />
          <Image
            style={homeHeaderStyles.badge}
            source={assets.badge}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={homeHeaderStyles.hello}>Hello, Tetiana 👋</Text>
        <Text style={homeHeaderStyles.subHello}>Let's find a masterpiece</Text>
      </View>

      <View style={homeHeaderStyles.searchContainer}>
        <View style={homeHeaderStyles.searchBox}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={homeHeaderStyles.searchImage}
          />
          <TextInput
            placeholder="Search NFTs"
            style={homeHeaderStyles.input}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
