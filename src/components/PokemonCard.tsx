import { View, Text, StyleSheet, Image } from 'react-native';
import { usePokemon } from '../context/PokemonContext';

type Pokemon = {
  id: number;
  name: string;
  image: string;
  types: string[];
  abilities: string[];
};

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    const { colors } = usePokemon();
  return (
    <View style={[styles.card, { backgroundColor: colors.card }]}>
      {/* Image */}
      <Image
        source={{ uri: pokemon.image }}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Name */}
      <Text style={[styles.name, { color: colors.textPrimary }]}>
        {pokemon.name.toUpperCase()}
      </Text>

      {/* Types */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>Types</Text>
        <View style={styles.chips}>
          {pokemon.types.map(type => (
            <View key={type} style={[styles.chip, { backgroundColor: colors.chipBg }]}>
              <Text style={[styles.chipText, { color: colors.chipText }]}>
                {type}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Abilities */}
      <View style={styles.section}>
        <Text style={[styles.sectionTitle, { color: colors.textSecondary }]}>Abilities</Text>
        {pokemon.abilities.map(ability => (
          <Text key={ability} style={[styles.abilityText, { color: colors.textPrimary }]}>
            • {ability}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  image: {
    width: 220,
    height: 220,
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 16,
  },
  section: {
    width: '100%',
    marginTop: 12,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 6,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '600',
  },
  abilityText: {
    fontSize: 14,
    marginBottom: 4,
  },
});