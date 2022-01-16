import styled, { css } from 'styled-components/native';
import { TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { getSize } from '@/helpers/getSize';
import { spreadSizes } from '@/helpers/spreadSizes';
import { darken, transparentize } from 'polished';

interface IContainerProps {
  margins?: number[];
}

export const Container = styled.View<IContainerProps>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ margins }) =>
    margins &&
    css`
      margin: ${spreadSizes(margins)};
    `}
`;

export const Input = styled(TextInput)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.gray};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${getSize(16)}px;
  color: ${({ theme }) => darken(0.1, theme.colors.secondary)};
  height: ${getSize(48)}px;
  border-radius: ${getSize(8)}px;
  padding: 0px ${getSize(40)}px 0px ${getSize(8)}px;
`;

export const SearchIcon = styled(Feather).attrs(({ theme }) => ({
  name: 'search',
  size: getSize(24),
  color: theme.colors.primary,
}))``;

export const IconContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: ${getSize(8)}px;
  width: ${getSize(40)}px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-left-width: 1px;
  border-color: ${({ theme }) => transparentize(0.9, theme.colors.secondary)};
`;
