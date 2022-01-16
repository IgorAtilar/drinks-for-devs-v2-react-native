import AppLoading from 'expo-app-loading';
import React from 'react';
import { LogBox } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import { theme } from '@/global/styles';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '@/services/queryClient';
import { AppRoutes } from '@/routes/app.routes';

export default function App() {
  LogBox.ignoreLogs(['Setting a timer']);

  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppRoutes />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
