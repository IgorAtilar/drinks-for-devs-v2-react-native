import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

const height = Dimensions.get('window').height;

export const getSize = (size: number): number => {
  return RFValue(size, height);
};
