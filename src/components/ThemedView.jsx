import { useColorScheme, View } from 'react-native';
import { Colors } from '../constants/Colors';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ThemedView = ({ style, safeTop = false, safeBottom = false, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  const insets = useSafeAreaInsets();

  const viewStyle = {
    backgroundColor: theme.background,
    ...(safeTop && { paddingTop: insets.top }),
    ...(safeBottom && { paddingBottom: insets.bottom }),
  };

  return (
    <View 
      style={[viewStyle, style]} 
      {...props}
    />
  );
};

export default ThemedView;