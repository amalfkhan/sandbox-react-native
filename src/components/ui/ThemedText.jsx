import { Text, useColorScheme } from 'react-native';
import { Colors } from '../../constants/Colors';

export default function ThemedText({ 
  children, 
  title = false, 
  style, 
  ...props 
}) {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const textColor = title ? theme.title : theme.text;

  return (
    <Text 
      style={[{ color: textColor }, style]} 
      {...props}
    >
      {children}
    </Text>
  );
}