import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import ThemedText from './ThemedText';
import useTheme from '../../hooks/useTheme';
import { Colors } from '../../constants/Colors';

export default function ThemedInput({ 
  label, 
  placeholder, 
  value, 
  onChangeText, 
  style, 
  inputStyle,
  error,
  ...props 
}) {
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      {label && (
        <ThemedText style={styles.label}>{label}</ThemedText>
      )}
      
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: theme.input,
            color: theme.inputText,
            borderColor: error ? Colors.error : theme.border,
          },
          inputStyle
        ]}
        placeholder={placeholder}
        placeholderTextColor={theme.placeholder}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      
      {error && (
        <ThemedText style={[styles.error, { color: Colors.error }]}>
          {error}
        </ThemedText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    minHeight: 44,
  },
  error: {
    fontSize: 14,
    marginTop: 4,
  },
});