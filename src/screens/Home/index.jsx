import { ScrollView, StyleSheet } from 'react-native';
import { ThemedView, ThemedText, Spacer, ThemedCard } from '../../components';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container} safeTop={true}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText title={true} style={styles.title}>
          Community Center
        </ThemedText>
        
        <ThemedText style={styles.subtitle}>
          Welcome to your community hub
        </ThemedText>

        <Spacer size={20} />

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Latest Announcements</ThemedText>
          <Spacer size={10} />
          <ThemedText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Upcoming Events</ThemedText>
          <Spacer size={10} />
          <ThemedText>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Quick Links</ThemedText>
          <Spacer size={10} />
          <ThemedText>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</ThemedText>
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