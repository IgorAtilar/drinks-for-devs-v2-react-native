import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { Header } from '@/components/Header';
import { getSize } from '@/helpers/getSize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 0px ${getSize(16)}px;
  padding-bottom: ${getSize(16)}px;
`;

export const StyledHeader = styled(Header)`
  margin-bottom: ${getSize(24)}px;
`;

export const SectionTitle = styled.Text`
  font-size: ${getSize(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: ${getSize(16)}px;
`;

export const DrinksContainer = styled.View`
  flex: 1;
`;

export const StyledFlatList = styled(FlatList).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getSize(24),
  },
})`` as unknown as typeof FlatList;
