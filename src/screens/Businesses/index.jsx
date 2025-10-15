import { ScrollView, StyleSheet, useColorScheme } from 'react-native';
import { router } from 'expo-router';
import { businesses } from '../../data/businessesData';
import { ThemedView, ThemedText, Spacer, BusinessCard, HorizontalBusinessList } from '../../components';
import { Colors } from '../../constants/Colors';

export default function BusinessesScreen() {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  const handleBusinessPress = (business) => {
    router.push(`/business/${business.id}`);
  };

  const featuredRestaurants = businesses
    .filter(business => business.category === 'Food & Beverage')
    .slice(0, 5);

  return (
    <ThemedView style={styles.container} safeTop={true}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText title={true} style={styles.title}>
          Local Businesses
        </ThemedText>
        
        <ThemedText style={styles.subtitle}>
          Discover businesses in your community
        </ThemedText>

        <Spacer size={20} />

        <ThemedText style={styles.sectionTitle}>
          Featured Restaurants
        </ThemedText>
        
        <Spacer size={12} />
        
        <HorizontalBusinessList
          businesses={featuredRestaurants}
          onBusinessPress={handleBusinessPress}
          style={styles.horizontalScroll}
          contentContainerStyle={styles.horizontalScrollContent}
        />

        <Spacer size={24} />

        <ThemedText style={styles.sectionTitle}>
          All Businesses
        </ThemedText>

        <Spacer size={12} />

        {businesses.map((business) => (
          <BusinessCard
            key={business.id}
            business={business}
            variant="full"
            onPress={handleBusinessPress}
          />
        ))}
        
        <Spacer size={20} />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    opacity: 0.7,
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 0,
  },
  horizontalScroll: {
    flexGrow: 0,
    marginHorizontal: -20,
  },
  horizontalScrollContent: {
    paddingHorizontal: 20,
  },
});