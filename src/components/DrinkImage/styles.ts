import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Dimensions, Pressable, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getSize } from '@/helpers/getSize';

export const Container = styled(Pressable)`
  height: ${Dimensions.get('window').height}px;
  width: ${Dimensions.get('window').width}px;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

export const StyledImage = styled.Image`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-radius: ${getSize(8)}px;
  background-color: ${({ theme }) => theme.colors.gray};
`;

export const CloseIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'x',
  size: getSize(32),
  color: theme.colors.primary,
}))``;

export const CloseButton = styled.TouchableOpacity`
  position: absolute;
  top: ${getSize(16)}px;
  right: ${getSize(16)}px;
  width: ${getSize(56)}px;
  height: ${getSize(56)}px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${getSize(56)}px;
  justify-content: center;
  align-items: center;
`;

export const styles = StyleSheet.create({
  motiContainer: {
    width: RFPercentage(48),
    height: RFPercentage(64),
  },
});
