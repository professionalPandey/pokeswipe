import { useColorScheme } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { PokemonProvider } from './src/context/PokemonContext';
import { lightColors, darkColors } from './src/theme/colors';

import WelcomeScreen from './src/screens/WelcomeScreen';
import SwipeScreen from './src/screens/SwipeScreen';
import LikedPokemonScreen from './src/screens/LikedPokemonScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();

  const navigationTheme =
    scheme === 'dark'
      ? {
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            background: darkColors.background,
            card: darkColors.card,
            text: darkColors.textPrimary,
          },
        }
      : {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            background: lightColors.background,
            card: lightColors.card,
            text: lightColors.textPrimary,
          },
        };

  return (
    <PokemonProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Swipe" component={SwipeScreen} />
          <Stack.Screen name="Liked" component={LikedPokemonScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </PokemonProvider>
  );
}