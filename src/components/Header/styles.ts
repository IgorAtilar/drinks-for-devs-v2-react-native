import styled from 'styled-components/native';
import { View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { getSize } from '@/helpers/getSize';
import LogoSvg from '@/assets/logo.svg';

export const Container = styled(View)`
  margin-top: ${getStatusBarHeight() + getSize(24)}px;
`;

export const Logo = styled(LogoSvg)``;
