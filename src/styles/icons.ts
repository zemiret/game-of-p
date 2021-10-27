import {ViewStyle} from 'react-native';
import {Spacings} from 'app/styles/layouts';

interface IconsTypes {
  topLeftIconContainer: ViewStyle;
  topRightIconContainer: ViewStyle;
  topSpacing: (space: number) => ViewStyle;
}

export const Icons: IconsTypes = {
  topLeftIconContainer: {
    position: 'absolute',
    top: Spacings.md,
    left: Spacings.md,
    zIndex: 1000,
  },
  topRightIconContainer: {
    position: 'absolute',
    top: Spacings.md,
    right: Spacings.md,
    zIndex: 1000,
  },
  topSpacing: (space: number) => ({
    top: space,
  }),
};
