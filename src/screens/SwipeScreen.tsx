import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { getRandomPokemon } from '../services/pokeapi';
import { usePokemon } from '../context/PokemonContext';
import PokemonCard from '../components/PokemonCard';
import LikeDislikeButtons from '../components/LikeDislikeButtons';

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
  abilities: string[];
};

export default function SwipeScreen({ navigation }: any) {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);
  const { likePokemon, dislikePokemon, colors } = usePokemon();

  const loadPokemon = async () => {
    try {
      setLoading(true);
      const data = await getRandomPokemon();
      setPokemon(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPokemon();
  }, []);

  if (loading || !pokemon) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#EF5350" />
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <PokemonCard pokemon={pokemon} />

      <LikeDislikeButtons
        onLike={() => {
          likePokemon(pokemon);
          loadPokemon();
        }}
        onDislike={() => {
          dislikePokemon(pokemon.id);
          loadPokemon();
        }}
        onViewLiked={() => navigation.navigate('Liked')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});