import { COLORS, SHADOWS, SIZES } from '../../constants';

export const circleButtonStyles = {
  touchableOpacity: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.extraLarge,
    ...SHADOWS.light,
  },
};
