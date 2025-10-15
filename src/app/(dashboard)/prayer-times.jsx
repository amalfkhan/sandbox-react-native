import { ScrollView, StyleSheet } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import Spacer from '../../components/Spacer';

export default function PrayerTimes() {
  return (
    <ThemedView style={styles.container} safeTop={true}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText title={true} style={styles.title}>
          Prayer Times
        </ThemedText>
        
        <ThemedText style={styles.subtitle}>
          Daily prayer schedule for your location
        </ThemedText>

        <Spacer size={20} />

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Today's Prayer Times</ThemedText>
          <Spacer size={10} />
          <ThemedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Location Settings</ThemedText>
          <Spacer size={10} />
          <ThemedText>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Prayer Notifications</ThemedText>
          <Spacer size={10} />
          <ThemedText>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</ThemedText>
        </ThemedCard>
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
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
  },
  card: {
    marginBottom: 15,
  },
});