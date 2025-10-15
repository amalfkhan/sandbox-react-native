import { View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import useTheme from '../../hooks/useTheme';

const ThemedView = ({ style, safeTop = false, safeBottom = false, ...props }) => {
  const { theme } = useTheme();
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