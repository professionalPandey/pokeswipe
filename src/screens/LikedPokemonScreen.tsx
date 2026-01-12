import React from 'react';
import { View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { usePokemon } from '../context/PokemonContext';
import PokemonCard from '../components/PokemonCard';

export default function LikedPokemonScreen() {
  const { likedPokemon, dislikePokemon, colors } = usePokemon();

  if (likedPokemon.length === 0) {
    return (
      <SafeAreaView style={[styles.center, { backgroundColor: colors.background }]}>
        <Text style={{ color: colors.textSecondary }}>No favourites yet ❤️</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <FlatList
        data={likedPokemon}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <Pressable
            style={styles.cardWrapper}
            onPress={() => dislikePokemon(item.id)}
          >
            <Ionicons
              name="heart"
              size={22}
              color="#EF5350"
              style={styles.heart}
            />

            <View pointerEvents="none">
              <PokemonCard pokemon={item} />
            </View>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  list: { padding: 16, gap: 20 },
  cardWrapper: { position: 'relative' },
  heart: { position: 'absolute', top: 16, right: 16, zIndex: 10 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});