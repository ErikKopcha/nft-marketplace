import { SIZES, COLORS } from '@app/constants';

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  placeABidButton: {
    width: '100%',
    position: 'absolute',
    bottom: 10,
    paddingVertical: SIZES.font,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.5',
    zIndex: 1,
  },
  detailsDescContainer: {
    padding: SIZES.font,
  },
  bidText: {
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
};
