import { COLORS } from '@app/constants';

export const homeStyles = {
  safeAreaView: {
    flex: 1,
  },
  viewContainer: {
    flex: 1,
  },
  flatListContainer: {
    zIndex: 0,
  },
  backgroundBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    height: '100%',
    zIndex: -1,
  },
  backgroundItemOne: {
    height: 300,
    backgroundColor: COLORS.primary,
  },
  backgroundItemTwo: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
};
