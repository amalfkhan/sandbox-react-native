import { Pressable, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

export default function ThemedButton({ 
  title, 
  onPress, 
  variant = 'primary', 
  style,
  textStyle,
  ...props 
}) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const getButtonStyle = () => {
    switch (variant) {
      case 'outline':
        return [styles.button, styles.outlineButton, { borderColor: Colors.primary }, style];
      case 'text':
        return [styles.button, styles.textButton, style];
      case 'warning':
        return [styles.button, { backgroundColor: Colors.warning }, style];
      default:
        return [styles.button, { backgroundColor: Colors.primary }, style];
    }
  };

  const getTextStyle = () => {
    switch (variant) {
      case 'outline':
        return [styles.buttonText, { color: Colors.primary }, textStyle];
      case 'text':
        return [styles.buttonText, { color: Colors.primary }, textStyle];
      case 'warning':
        return [styles.buttonText, { color: Colors.warningForeground }, textStyle];
      default:
        return [styles.buttonText, { color: Colors.primaryForeground }, textStyle];
    }
  };

  return (
    <Pressable 
      style={({ pressed }) => [
        getButtonStyle(),
        pressed && styles.pressed
      ]}
      onPress={onPress}
      {...props}
    >
      <Text style={getTextStyle()}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 44,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
  },
  textButton: {
    backgroundColor: 'transparent',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  pressed: {
    opacity: 0.7,
  },
});