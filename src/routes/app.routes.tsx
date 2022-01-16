import React from 'react';
import { Home } from '@/screens/Home';
import { Drink } from '@/screens/Drink';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Drink: {
    idDrink: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const { Navigator, Screen } = Stack;

export const AppRoutes = () => {
  return (
    <Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name='Home' component={Home} />
      <Screen name='Drink' component={Drink} />
    </Navigator>
  );
};
