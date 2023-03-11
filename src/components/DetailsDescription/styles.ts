import { COLORS, SIZES } from '@app/constants';

export const styles = {
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descTitle: { fontSize: SIZES.font, color: COLORS.primary },
  descContainer: {
    marginTop: SIZES.base,
  },
  text: {
    color: COLORS.secondary,
    fontSize: SIZES.small,
    lineHeight: SIZES.large,
  },
  readMoreContainer: {
    color: COLORS.primary,
    fontSize: SIZES.small,
  },
};
