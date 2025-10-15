import { View, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link } from 'expo-router';
import ThemedView from '../components/ThemedView';
import ThemedText from '../components/ThemedText';
import ThemedButton from '../components/ThemedButton';
import ThemedLogo from '../components/ThemedLogo';
import Spacer from '../components/Spacer';

export default function Index() {
  return (
    <ThemedView style={styles.container} safeTop={true} safeBottom={true}>
      <ThemedLogo />
      
      <ThemedText title={true} style={styles.title}>
        Welcome to Community Center
      </ThemedText>
      
      <ThemedText style={styles.subtitle}>
        Stay connected with your community
      </ThemedText>

      <View style={styles.buttonContainer}>
        <Link href="/(auth)/login" asChild>
          <ThemedButton title="Login" />
        </Link>
        
        <Link href="/(auth)/register" asChild>
          <ThemedButton title="Register" variant="outline" />
        </Link>
        
        <Link href="/(dashboard)/home" asChild>
          <ThemedButton title="Continue as Guest" variant="text" />
        </Link>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    marginBottom: 30,
    textAlign: 'center',
    opacity: 0.7,
  },
  buttonContainer: {
    gap: 15,
    width: '100%',
    maxWidth: 300,
  },
});