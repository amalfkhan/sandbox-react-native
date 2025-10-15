import { ScrollView, StyleSheet } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import Spacer from '../../components/Spacer';

export default function Events() {
  return (
    <ThemedView style={styles.container} safeTop={true}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText title={true} style={styles.title}>
          Community Events
        </ThemedText>
        
        <ThemedText style={styles.subtitle}>
          Stay updated with community happenings
        </ThemedText>

        <Spacer size={20} />

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Upcoming Events</ThemedText>
          <Spacer size={10} />
          <ThemedText>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Event Calendar</ThemedText>
          <Spacer size={10} />
          <ThemedText>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Event Categories</ThemedText>
          <Spacer size={10} />
          <ThemedText>Magni dolores eos qui ratione voluptatem sequi nesciunt neque porro quisquam est.</ThemedText>
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