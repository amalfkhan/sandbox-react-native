import React, { useState } from 'react';
import { View, StyleSheet, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link, router } from 'expo-router';
import { ThemedView, ThemedText, Spacer, ThemedButton, ThemedInput } from '../../components';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }
    
    console.log('Registration attempt:', { name, email, password });
    router.replace('/(dashboard)/home');
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ThemedView style={styles.container} safeTop={true} safeBottom={true}>
        <ThemedText title={true} style={styles.title}>
          Create Account
        </ThemedText>
        
        <ThemedText style={styles.subtitle}>
          Sign up to get started
        </ThemedText>

        <Spacer size={30} />

        <View style={styles.form}>
          <ThemedInput
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
          />

          <ThemedInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <ThemedInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <ThemedInput
            label="Confirm Password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />

          <Spacer size={20} />

          <ThemedButton 
            title="Register" 
            onPress={handleRegister}
          />

          <Spacer size={15} />

          <Link href="/(auth)/login" asChild>
            <ThemedButton 
              title="Already have an account? Login" 
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
});