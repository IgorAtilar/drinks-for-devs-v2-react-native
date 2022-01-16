import React from 'react';
import { ViewProps } from 'react-native';
import { Container, Logo } from './styles';

export const Header = ({ ...rest }: ViewProps) => {
  return (
    <Container {...rest}>
      <Logo />
    </Container>
  );
};
