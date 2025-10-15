import { View, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function ThemedCard({ children, style, ...props }) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <View style={[
      { 
        backgroundColor: theme.uiBackground,
        shadowColor: theme.shadow,
        borderColor: theme.border,
      },
      styles.card, 
      style
    ]} {...props}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    padding: 16,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
  },
});