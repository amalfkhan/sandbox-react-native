import { TouchableOpacity, Image, View, StyleSheet } from 'react-native';
import { ThemedText } from '../ui';
import { getBusinessImage } from '../../data/businessesData';

// Banner color theme
const BANNER_COLORS = {
  background: '#FFFBF0',      // Light yellow background
  primaryText: '#2D1B69',     // Dark purple for titles
  secondaryText: '#5D4E75',   // Medium purple for subtitles
  accent: '#8B6914',          // Dark yellow for CTA and sponsored text
  labelBg: 'rgba(255, 255, 255, 0.2)', // Semi-transparent white for sponsored label
};

export default function SponsorshipBanner({ business, style, onPress }) {
  const handlePress = () => {
    if (onPress) {
      onPress(business);
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.banner, style]} 
      activeOpacity={0.8}
      onPress={handlePress}
    >
      <View style={[styles.bannerContainer, { backgroundColor: BANNER_COLORS.background }]}>
        <View style={styles.sponsoredLabel}>
          <ThemedText style={[styles.sponsoredText, { color: BANNER_COLORS.accent }]}>SPONSORED</ThemedText>
        </View>
        <View style={styles.bannerContent}>
          <View style={styles.bannerTextSection}>
            <ThemedText style={[styles.bannerTitle, { color: BANNER_COLORS.primaryText }]} numberOfLines={1}>
              {business.name}
            </ThemedText>
            <ThemedText style={[styles.bannerSubtitle, { color: BANNER_COLORS.secondaryText }]}>
              ⭐ {business.rating} • {business.category}
            </ThemedText>
            <ThemedText style={[styles.bannerCTA, { color: BANNER_COLORS.accent }]}>
              Learn More →
            </ThemedText>
          </View>
          <Image 
            source={{ uri: getBusinessImage(business.category) }}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: 110,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
  },
  bannerContainer: {
    flex: 1,
    padding: 16,
  },
  sponsoredLabel: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: BANNER_COLORS.labelBg,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  sponsoredText: {
    fontSize: 9,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  bannerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  bannerTextSection: {
    flex: 1,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    fontSize: 12,
    opacity: 0.9,
    marginBottom: 6,
  },
  bannerCTA: {
    fontSize: 12,
    fontWeight: '600',
  },
  bannerImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginLeft: 12,
  },
});