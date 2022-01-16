import { api } from '@/services/api';
import { QueryOptions, useQuery } from 'react-query';
import { allDrinksSearch } from '@/utils/allDrinksOptions';

export type IDrink = {
  idDrink: string;
  strDrink: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strMeasure1?: string;
  strMeasure2?: string;
  strMeasure3?: string;
  strMeasure4?: string;
  strMeasure5?: string;
  strMeasure6?: string;
  strMeasure7?: string;
  strMeasure8?: string;
  strMeasure9?: string;
  strMeasure10?: string;
  strMeasure11?: string;
  strMeasure12?: string;
  strMeasure13?: string;
  strMeasure14?: string;
  strMeasure15?: string;
};

export const getDrinksByFirstLetter = async () => {
  const drinks: IDrink[] = [];

  await Promise.all(
    allDrinksSearch.map(async (letter) => {
      const { data } = await api.get(`search.php?f=${letter}`);
      if (data.drinks) {
        drinks.push(...data.drinks);
      }
    })
  );

  return drinks.sort((a, b) => a.strDrink.localeCompare(b.strDrink));
};

export const useDrinks = () => {
  return useQuery(['drinks'], getDrinksByFirstLetter);
};
