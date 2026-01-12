import { View, Pressable, Text, StyleSheet } from 'react-native';

export default function LikeDislikeButtons({
  onLike,
  onDislike,
  onViewLiked,
}: {
  onLike: () => void;
  onDislike: () => void;
  onViewLiked: () => void;
}) {
  return (
    <View style={styles.wrapper}>
      <View style={styles.actions}>
        <Pressable style={styles.dislike} onPress={onDislike}>
          <Text style={styles.icon}>❌</Text>
        </Pressable>

        <Pressable style={styles.like} onPress={onLike}>
          <Text style={styles.icon}>❤️</Text>
        </Pressable>
      </View>

      <Pressable onPress={onViewLiked}>
        <Text style={styles.viewLiked}>View liked Pokémon</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 24,
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    gap: 40,
    marginBottom: 16,
  },
  like: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  dislike: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#E58995',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  icon: {
    fontSize: 28,
  },
  viewLiked: {
    fontSize: 14,
    color: '#1976D2',
    fontWeight: '600',
  },
});