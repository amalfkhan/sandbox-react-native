import { StyleSheet, View } from 'react-native';
import { ThemedText, ThemedCard } from '../index';
import useTheme from '../../hooks/useTheme';

// Today's Prayer Schedule
export const PrayerScheduleCard = () => (
  <ThemedCard style={styles.scheduleCard}>
    <View style={styles.scheduleContent}>
      <View style={styles.scheduleList}>
        <View style={[styles.scheduleItem, styles.scheduleActive]}>
          <ThemedText style={[styles.schedulePrayer, styles.scheduleActiveText]}>Asr</ThemedText>
          <ThemedText style={[styles.scheduleTime, styles.scheduleActiveText]}>5:21 PM • Next</ThemedText>
        </View>
        <View style={styles.scheduleItem}>
          <ThemedText style={styles.schedulePrayer}>Maghrib</ThemedText>
          <ThemedText style={styles.scheduleTime}>7:15 PM</ThemedText>
        </View>
        <View style={styles.scheduleItem}>
          <ThemedText style={styles.schedulePrayer}>Isha</ThemedText>
          <ThemedText style={styles.scheduleTime}>8:45 PM</ThemedText>
        </View>
      </View>
    </View>
  </ThemedCard>
);

// Original Prayer Times Card
export const PrayerTimesCard = () => {
  const { theme } = useTheme();
  
  return (
    <ThemedCard style={styles.prayerCard}>
      <View style={styles.prayerContent}>
        <ThemedText style={[styles.nextLabel, { color: theme.text, opacity: 0.7 }]}>
          NEXT
        </ThemedText>
        <ThemedText style={styles.prayerTime}>5:21</ThemedText>
        <ThemedText style={styles.prayerName}>Asr</ThemedText>
        <ThemedText style={[styles.timeRemaining, { color: theme.text, opacity: 0.7 }]}>
          In 1hr, 26m
        </ThemedText>
      </View>
    </ThemedCard>
  );
};

const styles = StyleSheet.create({
  // Original Prayer Card Styles
  prayerCard: {
    padding: 20,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.06,
    shadowRadius: 2,
    elevation: 1.5,
  },
  prayerContent: {
    alignItems: 'flex-start',
    width: '100%',
  },
  nextLabel: {
    fontSize: 14,
    fontWeight: 'normal',
    marginBottom: 2,
  },
  prayerTime: {
    fontSize: 42,
    fontWeight: '600',
    lineHeight: 46,
    marginBottom: 2,
  },
  prayerName: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  timeRemaining: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  
  // Schedule Overview Styles
  scheduleCard: {
    padding: 16,
  },
  scheduleContent: {
    alignItems: 'stretch',
  },
  scheduleList: {
    alignItems: 'stretch',
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 0,
  },
  scheduleActive: {
    backgroundColor: 'rgba(74, 144, 226, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    marginVertical: 2,
    marginHorizontal: 0,
  },
  schedulePrayer: {
    fontSize: 14,
    fontWeight: '500',
  },
  scheduleTime: {
    fontSize: 14,
  },
  scheduleActiveText: {
    color: '#4A90E2',
    fontWeight: 'bold',
  },
});