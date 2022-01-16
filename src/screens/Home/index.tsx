import React from 'react';
import { SearchBox } from '@/components/SearchBox';
import { Card } from '@/components/Card';
import { useDrinks } from '@/hooks/useDrinks';

import {
  Container,
  SectionTitle,
  StyledHeader,
  DrinksContainer,
  StyledFlatList,
} from './styles';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/core';

export const Home = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { data: drinks, isLoading } = useDrinks();

  const handleNavigateToDrink = (idDrink: string) => {
    navigation.navigate('Drink', { idDrink });
  };

  return (
    <>
      <StatusBar style='light' backgroundColor={theme.colors.primary} />
      <Container>
        <StyledHeader />
        <SectionTitle>Discover</SectionTitle>
        <SearchBox
          margins={[0, 0, 16, 0]}
          placeholder='Search a drink recipe'
        />
        <SectionTitle>Recipes</SectionTitle>
        {!isLoading && (
          <DrinksContainer>
            <StyledFlatList
              data={drinks}
              keyExtractor={({ idDrink }) => idDrink}
              renderItem={({
                item: {
                  idDrink,
                  strDrink,
                  strCategory,
                  strAlcoholic,
                  strDrinkThumb,
                },
              }) => (
                <Card
                  strDrink={strDrink}
                  strCategory={strCategory}
                  strAlcoholic={strAlcoholic}
                  strDrinkThumb={strDrinkThumb}
                  margins={[0, 0, 16, 0]}
                  onIconPress={() => handleNavigateToDrink(idDrink)}
                />
              )}
            />
          </DrinksContainer>
        )}
      </Container>
    </>
  );
};
