import { View, Text, StyleSheet, Pressable } from 'react-native';
import { usePokemon } from '../context/PokemonContext';

export default function WelcomeScreen({ navigation }: any) {
  const { colors } = usePokemon();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      {/* Cancel Button */}
      <Pressable
        style={styles.cancel}
        onPress={() => {
          navigation.canGoBack() && navigation.goBack();
        }}
      >
        <Text style={[styles.cancelText, { color: colors.textSecondary }]}>
          Cancel
        </Text>
      </Pressable>

      {/* Title */}
      <Text style={[styles.title, { color: colors.textPrimary }]}>
        PokéSwipe
      </Text>

      {/* Instructions */}
      <View
        style={[
          styles.instructions,
          { backgroundColor: colors.card },
        ]}
      >
        <Text
          style={[
            styles.instructionTitle,
            { color: colors.textPrimary },
          ]}
        >
          How to Play
        </Text>

        <Text style={[styles.instructionText, { color: colors.textSecondary }]}>
          • A Pokémon card will be shown one at a time
        </Text>
        <Text style={[styles.instructionText, { color: colors.textSecondary }]}>
          • Tap ❤️ to like the Pokémon
        </Text>
        <Text style={[styles.instructionText, { color: colors.textSecondary }]}>
          • Tap ❌ to dislike the Pokémon
        </Text>
        <Text style={[styles.instructionText, { color: colors.textSecondary }]}>
          • You must choose before moving to the next one
        </Text>
        <Text style={[styles.instructionText, { color: colors.textSecondary }]}>
          • View all liked Pokémon anytime
        </Text>
      </View>

      {/* Start Button */}
      <Pressable
        style={[
          styles.startButton,
          { backgroundColor: colors.buttonPrimary },
        ]}
        onPress={() => navigation.navigate('Swipe')}
      >
        <Text style={styles.startText}>Start</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  cancel: {
    position: 'absolute',
    top: 50,
    right: 24,
  },
  cancelText: {
    fontSize: 16,
    fontWeight: '600',
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    marginBottom: 24,
  },
  instructions: {
    borderRadius: 20,
    padding: 20,
    width: '100%',
    marginBottom: 32,
    elevation: 4,
  },
  instructionTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    textAlign: 'center',
  },
  instructionText: {
    fontSize: 14,
    marginBottom: 6,
  },
  startButton: {
    paddingVertical: 16,
    paddingHorizontal: 48,
    borderRadius: 30,
  },
  startText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
});