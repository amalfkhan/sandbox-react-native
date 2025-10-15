import { View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useTheme from '../../hooks/useTheme';

export default function ThemedLogo({ size = 60, style }) {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, style]}>
      <Ionicons 
        name="apps" 
        size={size} 
        color={theme.iconColorFocused} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
});