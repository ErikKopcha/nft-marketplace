import { COLORS, SHADOWS, SIZES } from '@app/constants';

export const styles = {
  subInfo: {
    width: '100%',
    paddingHorizontal: SIZES.font,
    marginTop: -SIZES.extraLarge,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  people: {
    flexDirection: 'row',
  },
  image: {
    width: 48,
    height: 48,
  },
  endDate: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.base,
    backgroundColor: COLORS.white,
    ...SHADOWS.light,
    elevation: 1,
    maxWidth: '50%',
    width: 130,
  },
  endDateEnding: {
    // fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  endDateEndingInfo: {
    // fontFamily: FONTS.semibold,
    fontSize: SIZES.medium,
    color: COLORS.primary,
  },
  title: {
    // fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  subTitle: {
    // fontFamily: FONTS.semiBold,
    color: COLORS.primary,
  },
  ethPriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ethImage: {
    width: 20,
    height: 20,
    marginRight: 2,
  },
  price: {
    // fontFamily: FONTS.medium,
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
};
