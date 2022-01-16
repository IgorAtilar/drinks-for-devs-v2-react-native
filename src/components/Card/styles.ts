import styled, { css } from 'styled-components/native';
import { Image, Pressable } from 'react-native';
import { getSize } from '@/helpers/getSize';
import { Feather } from '@expo/vector-icons';
import { spreadSizes } from '@/helpers/spreadSizes';

interface IContainerProps {
  margins?: number[];
}

export const Container = styled(Pressable)<IContainerProps>`
  flex-direction: row;
  width: 100%;
  height: ${getSize(120)}px;
  border-radius: ${getSize(8)}px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primary};
  ${({ margins }) =>
    margins &&
    css`
      margin: ${spreadSizes(margins)};
    `}
`;

export const Body = styled.View`
  flex: 1;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-left-width: ${getSize(8)}px;
  border-color: ${({ theme }) => theme.colors.light};
  margin-left: ${getSize(-1)}px;
  padding-left: ${getSize(8)}px;
`;

export const DetailsContainer = styled.View`
  flex: 1;
`;

export const Thumb = styled(Image)`
  height: ${getSize(120)}px;
  width: ${getSize(120)}px;
  border-top-left-radius: ${getSize(8)}px;
  border-bottom-left-radius: ${getSize(8)}px;
`;
export const Title = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: ${getSize(24)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Subtitle = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: ${getSize(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray};
`;

export const AlcoholicText = styled.Text.attrs({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
})`
  font-size: ${getSize(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.light};
`;

export const IconContainer = styled.TouchableOpacity`
  height: 100%;
  width: ${getSize(56)}px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: ${getSize(8)}px;
  border-bottom-right-radius: ${getSize(8)}px;
`;

export const Icon = styled(Feather).attrs(({ theme }) => ({
  name: 'chevron-right',
  size: getSize(32),
  color: theme.colors.light,
}))``;
