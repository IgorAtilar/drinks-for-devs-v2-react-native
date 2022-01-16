import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const height = Dimensions.get('window').height;

export const getFontSize = (size: number): number => {
  return RFValue(size, height);
};
