import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView, ThemedText, Spacer, SponsorshipBanner, PrayerTimesCard, EventCardElevated } from '../../components';
import { businesses } from '../../data/businessesData';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container} safeTop={true}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText title={true} style={styles.title}>
          Community Center
        </ThemedText>

        <Spacer size={10} />
        
        <SponsorshipBanner business={businesses[0]} />
        
        <Spacer size={20} />
        
        <ThemedText style={styles.sectionTitle}>Prayer Times</ThemedText>
        <Spacer size={15} />
        
        <PrayerTimesCard />
        
        <Spacer size={24} />
        
        <ThemedText style={styles.sectionTitle}>Events</ThemedText>
        <Spacer size={15} />
        
        <EventCardElevated />
        
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
    padding: 20,
  },
  title: {
    textAlign: 'left',
    marginBottom: 10,
    fontSize: 32,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 5,
  },
  variantLabel: {
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.8,
    marginBottom: 5,
  },
});