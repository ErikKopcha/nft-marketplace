import { COLORS, SIZES } from '@app/constants';

export const styles = {
  container: {
    backgroundColor: COLORS.primary,
    padding: SIZES.font,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 25,
  },
  subImageContainer: {
    width: 45,
    height: 45,
  },
  subImage: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    width: 15,
    height: 15,
    bottom: 0,
    right: 0,
  },
  hello: {
    // fontFamily: FONTS.regular,
    fontSize: SIZES.small,
    color: COLORS.white,
  },
  subHello: {
    // fontFamily: FONTS.regular,
    fontSize: SIZES.large,
    color: COLORS.white,
    marginTop: SIZES.base / 2,
  },
  searchImage: {
    width: 20,
    height: 20,
    marginRight: SIZES.base,
  },
  input: { flex: 1 },
  searchContainer: {
    marginTop: SIZES.font,
  },
  searchBox: {
    width: '100%',
    borderRadius: SIZES.font,
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SIZES.font,
    paddingVertical: SIZES.small - 2,
  },
};
