import { ScrollView, StyleSheet } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import Spacer from '../../components/Spacer';

export default function Businesses() {
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

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Business Directory</ThemedText>
          <Spacer size={10} />
          <ThemedText>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Featured Businesses</ThemedText>
          <Spacer size={10} />
          <ThemedText>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Categories</ThemedText>
          <Spacer size={10} />
          <ThemedText>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium.</ThemedText>
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