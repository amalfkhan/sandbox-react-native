import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link, router } from 'expo-router';
import { ThemedView, ThemedText, Spacer, ThemedButton } from '../../components';
import { Colors } from '../../constants/Colors';
import useTheme from '../../hooks/useTheme';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { theme } = useTheme();

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    
    console.log('Login attempt:', { email, password });
    router.replace('/(dashboard)/home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container} safeTop={true} safeBottom={true}>
        <ThemedText title={true} style={styles.title}>
          Welcome Back
        </ThemedText>
        
        <ThemedText style={styles.subtitle}>
          Sign in to your account
        </ThemedText>

        <Spacer size={30} />

        <View style={styles.form}>
          <TextInput
            style={[styles.input, { borderColor: theme.border, backgroundColor: theme.input }]}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={[styles.input, { borderColor: theme.border, backgroundColor: theme.input }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Spacer size={20} />

          <ThemedButton 
            title="Login" 
            onPress={handleLogin}
          />

          <Spacer size={15} />

          <Link href="/(auth)/register" asChild>
            <ThemedButton 
              title="Don't have an account? Register" 
              variant="text"
            />
          </Link>
        </View>
      </ThemedView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.7,
  },
  form: {
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
});