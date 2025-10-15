import { TouchableOpacity, Image, View, useColorScheme } from 'react-native';
import { router } from 'expo-router';
import ThemedCard from './ThemedCard';
import ThemedText from './ThemedText';
import Spacer from './Spacer';
import { getBusinessImage } from '../data/businessesData';
import { Colors } from '../constants/Colors';

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  
  return (
    '★'.repeat(fullStars) + 
    (hasHalfStar ? '☆' : '') + 
    '☆'.repeat(emptyStars)
  );
};

export default function BusinessCard({ 
  business, 
  variant = 'full', // 'full' or 'compact'
  style,
  onPress 
}) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];
  
  const handlePress = () => {
    if (onPress) {
      onPress(business);
    } else {
      router.push(`/business/${business.id}`);
    }
  };

  const isCompact = variant === 'compact';

  return (
    <TouchableOpacity 
      onPress={handlePress}
      activeOpacity={0.7}
      style={style}
    >
      <ThemedCard style={[
        isCompact ? styles.compactCard : styles.fullCard
      ]}>
        <Image 
          source={{ uri: getBusinessImage(business.category) }}
          style={isCompact ? styles.compactImage : styles.fullImage}
          resizeMode="cover"
        />
        
        <View style={isCompact ? styles.compactContent : styles.fullContent}>
          <View style={isCompact ? styles.compactHeader : styles.header}>
            <ThemedText 
              title={true} 
              style={isCompact ? styles.compactName : styles.fullName} 
              numberOfLines={1}
            >
              {business.name}
            </ThemedText>
            {isCompact ? (
              <View style={styles.ratingLeft}>
                <ThemedText style={styles.compactStar}>★</ThemedText>
                <ThemedText style={styles.compactRating}>
                  {business.rating}
                </ThemedText>
              </View>
            ) : (
              <ThemedText 
                style={[styles.fullCategory, { color: colors.text, opacity: 0.7 }]}
              >
                {business.category}
              </ThemedText>
            )}
          </View>
          
          <Spacer size={isCompact ? 6 : 8} />
          
          {isCompact ? (
            <ThemedText 
              style={[styles.compactCategory, { color: colors.text, opacity: 0.7 }]}
            >
              {business.category}
            </ThemedText>
          ) : (
            <View style={styles.ratingContainer}>
              <View style={styles.ratingLeft}>
                <ThemedText style={styles.fullStars}>
                  {renderStars(business.rating)}
                </ThemedText>
                <ThemedText style={styles.fullRating}>
                  {business.rating}
                </ThemedText>
              </View>
              <ThemedText 
                style={styles.fullHours} 
                numberOfLines={1}
              >
                {business.hours} • <ThemedText 
                  style={[
                    styles.fullStatus, 
                    { color: business.isOpen ? Colors.success : Colors.error }
                  ]}
                >
                  {business.isOpen ? 'OPEN' : 'CLOSED'}
                </ThemedText>
              </ThemedText>
            </View>
          )}
          
          {!isCompact && (
            <>
              <Spacer size={8} />
              <ThemedText style={styles.description} numberOfLines={2}>
                {business.description}
              </ThemedText>
            </>
          )}
        </View>
      </ThemedCard>
    </TouchableOpacity>
  );
}

const styles = {
  fullCard: {
    marginBottom: 16,
    overflow: 'hidden',
    padding: 0,
  },
  compactCard: {
    overflow: 'hidden',
    padding: 0,
  },
  fullImage: {
    width: '100%',
    height: 140,
    marginTop: 0,
    marginHorizontal: 0,
  },
  compactImage: {
    width: '100%',
    height: 100,
    marginTop: 0,
    marginHorizontal: 0,
  },
  fullContent: {
    padding: 12,
  },
  compactContent: {
    padding: 8,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  },
  compactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fullName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  compactName: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 6,
  },
  fullCategory: {
    fontSize: 12,
    fontWeight: '600',
    flexShrink: 0,
  },
  compactCategory: {
    fontSize: 10,
    fontWeight: '600',
    flexShrink: 0,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullStars: {
    fontSize: 16,
    color: Colors.starColor,
    marginRight: 8,
  },
  compactStar: {
    fontSize: 14,
    color: Colors.starColor,
    marginRight: 4,
  },
  fullRating: {
    fontSize: 14,
    fontWeight: '600',
  },
  compactRating: {
    fontSize: 12,
    fontWeight: '600',
  },
  fullHours: {
    fontSize: 13,
    opacity: 0.7,
  },
  fullStatus: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    opacity: 0.8,
  },
};