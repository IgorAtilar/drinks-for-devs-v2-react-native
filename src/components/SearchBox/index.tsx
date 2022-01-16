import React from 'react';
import { useTheme } from 'styled-components';
import { TextInputProps } from 'react-native';

import { Container, Input, IconContainer, SearchIcon } from './styles';
import { transparentize } from 'polished';

interface ISearchBoxProps extends TextInputProps {
  onIconPress?: () => void;
  margins?: number[];
}

export const SearchBox = ({
  onIconPress,
  margins,
  ...rest
}: ISearchBoxProps) => {
  const theme = useTheme();
  return (
    <Container margins={margins}>
      <Input
        placeholderTextColor={transparentize(0.6, theme.colors.secondary)}
        selectionColor={theme.colors.primary}
        underlineColorAndroid='transparent'
        {...rest}
      />
      <IconContainer onPress={onIconPress}>
        <SearchIcon />
      </IconContainer>
    </Container>
  );
};
