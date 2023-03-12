import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { assets, SIZES } from '@app/constants';
import { getRandomNumberFromRange, reduceNumberToTwoValues } from '@app/utils';

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
          ...styles.title,
          fontSize: titleSize,
        }}>
        {title}
      </Text>
      <Text
        style={{
          ...styles.subTitle,
          fontSize: subtitleSize,
        }}>
        {subtitle}
      </Text>
    </View>
  );
};

export const EthPrice = ({ price }: { price: number }): React.ReactElement => {
  return (
    <View style={styles.ethPriceContainer}>
      <Image source={assets.eth} resizeMode="contain" style={styles.ethImage} />
      <Text style={styles.price}>{price.toFixed(2)}</Text>
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
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        ...styles.image,
        marginLeft: index === 0 ? 0 : -SIZES.font,
      }}
    />
  );
};

export const People = (): React.ReactElement => {
  return (
    <View style={styles.people}>
      {[assets.person02, assets.person03, assets.person04].map(
        (imgUrl, index) => (
          <ImageCmp key={index} index={index} imgUrl={imgUrl} />
        ),
      )}
    </View>
  );
};

export const EndDate = (): React.ReactElement => {
  const [dateInfo, setDateInfo] = useState({
    h: '00',
    m: '00',
    s: '00',
  });

  const hour = 3_600_000;
  const currentDateTime: number = useMemo(() => new Date().getTime(), []);

  const deadline: number = useMemo(() => {
    return (
      currentDateTime +
      getRandomNumberFromRange(hour, hour * getRandomNumberFromRange(2, 12))
    );
  }, [currentDateTime]);

  const getTime = useCallback(() => {
    const time = deadline - Date.now();

    const h = reduceNumberToTwoValues(
      Math.floor((time / (1000 * 60 * 60)) % 24),
    );
    const m = reduceNumberToTwoValues(Math.floor((time / 1000 / 60) % 60));
    const s = reduceNumberToTwoValues(Math.floor((time / 1000) % 60));

    setDateInfo({
      h,
      m,
      s,
    });
  }, [deadline]);

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    return () => clearInterval(interval);
  }, [getTime]);

  return (
    <View style={styles.endDate}>
      <Text style={styles.endDateEnding}>Ending in</Text>
      <Text style={styles.endDateEndingInfo}>
        {dateInfo.h}h {dateInfo.m}m {dateInfo.s}s
      </Text>
    </View>
  );
};

export const SubInfo = (): React.ReactElement => {
  return (
    <View style={styles.subInfo}>
      <People />
      <EndDate />
    </View>
  );
};
