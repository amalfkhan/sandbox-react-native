import { StyleSheet, View, Image } from 'react-native';
import { ThemedText, ThemedCard } from '../index';
import useTheme from '../../hooks/useTheme';

const getNewsImage = () => {
  return 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?w=200&h=200&fit=crop';
};

export const NewsCardElevated = () => {
  const { theme } = useTheme();
  
  return (
    <ThemedCard style={styles.newsCard}>
      <View style={styles.newsContent}>
        <View style={styles.newsTextContent}>
          <ThemedText style={styles.newsTitle}>New Parking Guidelines Announced</ThemedText>
          <ThemedText style={[styles.newsSnippet, { color: theme.text, opacity: 0.7 }]}>
            Updated parking rules now in effect to improve access for all community members
          </ThemedText>
        </View>
        <View style={styles.newsImageContainer}>
          <Image 
            source={{ uri: getNewsImage() }}
            style={styles.newsImage}
            resizeMode="cover"
          />
        </View>
      </View>
    </ThemedCard>
  );
};

const styles = StyleSheet.create({
  newsCard: {
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1.5,
  },
  newsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  newsTextContent: {
    flex: 1,
    alignItems: 'flex-start',
    paddingRight: 16,
  },
  newsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  newsSnippet: {
    fontSize: 14,
    fontWeight: 'normal',
    lineHeight: 20,
  },
  newsImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  newsImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
});