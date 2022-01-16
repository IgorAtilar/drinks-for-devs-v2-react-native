import React, { useState } from 'react';
import { DrinkImage } from '../DrinkImage';

import {
  AlcoholicText,
  Container,
  Body,
  DetailsContainer,
  Subtitle,
  Thumb,
  Title,
  IconContainer,
  Icon,
} from './styles';

interface ICardProps {
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strDrinkThumb: string;
  onIconPress?: () => void;
  margins?: number[];
}

export const Card = ({
  strDrinkThumb,
  strDrink,
  strCategory,
  strAlcoholic,
  margins,
  onIconPress,
}: ICardProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Container margins={margins} onPress={() => setOpen(!open)}>
        <Thumb source={{ uri: strDrinkThumb }} />
        <Body>
          <DetailsContainer>
            <Title>{strDrink}</Title>
            <Subtitle>{strCategory}</Subtitle>
            <AlcoholicText>{strAlcoholic}</AlcoholicText>
          </DetailsContainer>
          <IconContainer onPress={onIconPress}>
            <Icon />
          </IconContainer>
        </Body>
      </Container>
      <DrinkImage
        isOpen={open}
        toogleIsOpen={() => setOpen(false)}
        strDrinkThumb={strDrinkThumb}
      />
    </>
  );
};
