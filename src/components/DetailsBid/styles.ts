import { SIZES, COLORS } from '@app/constants';
export const styles = {
  bidName: {
    fontSize: SIZES.small,
    color: COLORS.primary,
  },
  bidDate: {
    fontSize: SIZES.small - 2,
    color: COLORS.secondary,
    marginTop: 3,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.base * 2,
  },
};
