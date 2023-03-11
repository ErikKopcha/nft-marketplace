import { COLORS, SHADOWS, SIZES } from '@app/constants';

export const styles = {
  NFTCardContainer: {
    backgroundColor: COLORS.white,
    borderRadius: SIZES.font,
    marginBottom: SIZES.extraLarge,
    margin: SIZES.base,
    overflow: 'hidden',
    ...SHADOWS.dark,
  },
  NFTCardBox: { width: '100%', height: 250 },
  imageStyles: {
    width: '100%',
    height: '100%',
    borderTopLeftRadius: SIZES.font,
    borderTopRightRadius: SIZES.font,
  },
  titleContainer: {
    width: '100%',
    padding: SIZES.font,
  },
  priceBox: {
    marginTop: SIZES.font,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
};
