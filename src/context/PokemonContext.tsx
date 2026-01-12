import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { lightColors, darkColors } from '../theme/colors';

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
  abilities: string[];
};

type PokemonContextType = {
  likedPokemon: Pokemon[];
  likePokemon: (pokemon: Pokemon) => void;
  dislikePokemon: (pokemonId: number) => void;
  colors: typeof lightColors;
};

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider = ({ children }: { children: React.ReactNode }) => {
  const [likedPokemon, setLikedPokemon] = useState<Pokemon[]>([]);
  const scheme = useColorScheme();

  const colors = scheme === 'dark' ? darkColors : lightColors;

  const likePokemon = (pokemon: Pokemon) => {
    setLikedPokemon(prev => [...prev, pokemon]);
  };

  const dislikePokemon = (pokemonId: number) => {
    setLikedPokemon(prev => prev.filter(p => p.id !== pokemonId));
  };

  return (
    <PokemonContext.Provider
      value={{
        likedPokemon,
        likePokemon,
        dislikePokemon,
        colors,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within PokemonProvider');
  }
  return context;
};