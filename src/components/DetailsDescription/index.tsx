import { SIZES } from '@app/constants';
import { INFTCard } from '@app/types';
import React, { useCallback, useMemo, useState } from 'react';
import { Text, View } from 'react-native';
import { EthPrice, NFTTitle } from '../SubInfo';
import { styles } from './styles';

interface IDetailsDescription {
  data: INFTCard;
}

const DetailsDescription = ({
  data,
}: IDetailsDescription): React.ReactElement => {
  const slicedDesc = useMemo(() => {
    return data.description.slice(0, 100);
  }, [data]);

  const [text, setText] = useState(slicedDesc);
  const [readMore, setReadMore] = useState(false);

  const onToggleDescription = useCallback(() => {
    if (!readMore) {
      setText(data.description);
      setReadMore(true);

      return;
    }

    setText(slicedDesc);
    setReadMore(false);
  }, [readMore, slicedDesc, data]);

  return (
    <>
      <View style={styles.container}>
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subtitleSize={SIZES.font}
        />
        <EthPrice price={data.price} />
      </View>

      <View
        style={{
          marginVertical: SIZES.extraLarge * 1.5,
        }}>
        <Text style={styles.descTitle}>Description</Text>
        <View style={styles.descContainer}>
          <Text style={styles.text}>
            {text}
            {!readMore && '...'}
            <Text style={styles.readMoreContainer}>
              <Text onPress={onToggleDescription}>
                {readMore ? ' Show Less' : ' Show more'}
              </Text>
            </Text>
          </Text>
        </View>
      </View>
    </>
  );
};

export default DetailsDescription;
