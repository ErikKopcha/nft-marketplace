import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { assets, SIZES } from '@app/constants';

const HomeHeader = ({
  onSearch,
}: {
  onSearch: (inputValue: string) => void;
}): React.ReactElement => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={assets.logo} resizeMode="contain" />

        <View style={styles.subImageContainer}>
          <Image
            style={styles.subImage}
            source={assets.person01}
            resizeMode="contain"
          />
          <Image
            style={styles.badge}
            source={assets.badge}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text style={styles.hello}>Hello, Name 👋</Text>
        <Text style={styles.subHello}>Let's find a masterpiece</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Image
            source={assets.search}
            resizeMode="contain"
            style={styles.searchImage}
          />
          <TextInput
            placeholder="Search NFTs"
            style={styles.input}
            onChangeText={onSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;
