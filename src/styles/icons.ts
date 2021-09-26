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
    top: Spacings.bg,
    left: Spacings.bg,
    zIndex: 1000,
  },
  topRightIconContainer: {
    position: 'absolute',
    top: Spacings.bg,
    right: Spacings.bg,
    zIndex: 1000,
  },
  topSpacing: (space: number) => ({
    top: space,
  }),
};
