import React from 'react';
import { Image, Text, View } from 'react-native';
import { subInfoStyles } from './styles';
import { assets, SIZES } from '@app/constants';

export const NFTTitle = ({
  title,
  subtitle,
  titleSize,
  subtitleSize,
}: {
  title: string;
  subtitle: string;
  titleSize: number;
  subtitleSize: number;
}): React.ReactElement => {
  return (
    <View>
      <Text
        style={{
          ...subInfoStyles.title,
          fontSize: titleSize,
        }}>
        {title}
      </Text>
      <Text
        style={{
          ...subInfoStyles.subTitle,
          fontSize: subtitleSize,
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }: { price: number }): React.ReactElement => {
  return (
    <View style={subInfoStyles.ethPriceContainer}>
      <Image
        source={assets.eth}
        resizeMode="contain"
        style={subInfoStyles.ethImage}
      />
      <Text style={subInfoStyles.price}>{price}</Text>
    </View>
  );
};

export const ImageCmp = ({
  imgUrl,
  index,
}: {
  imgUrl: any;
  index: number;
}): React.ReactElement => {
  return (
    <Image
      source={imgUrl}
      resizeMode="contain"
      style={{
        ...subInfoStyles.image,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = (): React.ReactElement => {
  return (
    <View style={subInfoStyles.people}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp key={index} index={index} imgUrl={imgUrl} />
        ),
      )}
    </View>
  );
};

export const EndDate = (): React.ReactElement => {
  return (
    <View style={subInfoStyles.endDate}>
      <Text style={subInfoStyles.endDateEnding}>Ending in</Text>
      <Text style={subInfoStyles.endDateEndingInfo}>12h 30m</Text>
    </View>
  );
};

export const SubInfo = (): React.ReactElement => {
  return (
    <View style={subInfoStyles.subInfo}>
      <People />
      <EndDate />
    </View>
  );
};
