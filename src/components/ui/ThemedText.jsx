import { Text } from 'react-native';
import useTheme from '../../hooks/useTheme';

export default function ThemedText({ 
  children, 
  title = false, 
  style, 
  ...props 
}) {
  const { theme } = useTheme();
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