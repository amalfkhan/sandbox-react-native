import { StyleSheet, View } from 'react-native';
import { ThemedText, ThemedCard } from '../index';
import useTheme from '../../hooks/useTheme';

// Event Card - Elevated Style
export const EventCardElevated = () => {
  const { theme } = useTheme();
  
  return (
    <ThemedCard style={styles.eventCardElevated}>
      <View style={styles.eventContent}>
        <View style={styles.eventTextContent}>
          <ThemedText style={styles.eventTitleLarge}>Friday Khutbah</ThemedText>
          <ThemedText style={[styles.eventDateTime, { color: theme.text, opacity: 0.7 }]}>
            Fri, Oct 18 • 1:00 PM
          </ThemedText>
        </View>
        <View style={styles.eventIconElevated}>
          <ThemedText style={styles.mosqueIconLarge}>🕌</ThemedText>
        </View>
      </View>
    </ThemedCard>
  );
};

const styles = StyleSheet.create({
  eventContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  eventTextContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  eventTitleLarge: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  eventDateTime: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  eventCardElevated: {
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1.5,
  },
  eventIconElevated: {
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    borderRadius: 20,
    width: 40,
    height: 40,
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mosqueIconLarge: {
    fontSize: 40,
  },
});