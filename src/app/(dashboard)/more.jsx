import { ScrollView, StyleSheet } from 'react-native';
import ThemedView from '../../components/ThemedView';
import ThemedText from '../../components/ThemedText';
import ThemedCard from '../../components/ThemedCard';
import Spacer from '../../components/Spacer';

export default function More() {
  return (
    <ThemedView style={styles.container} safeTop={true}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <ThemedText title={true} style={styles.title}>
          More Options
        </ThemedText>
        
        <ThemedText style={styles.subtitle}>
          Settings, profile, and additional features
        </ThemedText>

        <Spacer size={20} />

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Profile</ThemedText>
          <Spacer size={10} />
          <ThemedText>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Settings</ThemedText>
          <Spacer size={10} />
          <ThemedText>Et harum quidem rerum facilis est et expedita distinctio nam libero tempore cum soluta.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>Notifications</ThemedText>
          <Spacer size={10} />
          <ThemedText>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe.</ThemedText>
        </ThemedCard>

        <ThemedCard style={styles.card}>
          <ThemedText title={true}>About</ThemedText>
          <Spacer size={10} />
          <ThemedText>Itaque earum rerum hic tenetur a sapiente delectus ut aut reiciendis voluptatibus maiores.</ThemedText>
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