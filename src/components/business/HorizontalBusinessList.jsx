import { ScrollView, Dimensions } from 'react-native';
import BusinessCard from './BusinessCard';

const { width: screenWidth } = Dimensions.get('window');

export default function HorizontalBusinessList({ 
  businesses, 
  onBusinessPress,
  style,
  contentContainerStyle 
}) {
  return (
    <ScrollView 
      horizontal 
      showsHorizontalScrollIndicator={false}
      style={style}
      contentContainerStyle={contentContainerStyle}
    >
      {businesses.map((business, index) => (
        <BusinessCard
          key={business.id}
          business={business}
          variant="compact"
          onPress={onBusinessPress}
          style={[
            styles.horizontalCard,
            { 
              marginLeft: index === 0 ? 0 : 8, 
              marginRight: index === businesses.length - 1 ? 0 : 8 
            }
          ]}
        />
      ))}
    </ScrollView>
  );
}

const styles = {
  horizontalCard: {
    width: screenWidth * 0.5,
  },
};