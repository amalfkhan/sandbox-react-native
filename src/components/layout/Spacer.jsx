import { View } from 'react-native';

export default function Spacer({ size = 10, horizontal = false }) {
  const style = horizontal 
    ? { width: size } 
    : { height: size };
    
  return <View style={style} />;
}