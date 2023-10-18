import { View, Text } from 'react-native';

export default function LittleLemonFooter() {
  return (
    <View style={{ flex: 0.07, backgroundColor: '#F4CE14', justifyContent: 'flex-end' }}>
      <Text
        style={{
          padding: 15,
          fontSize: 20,
          color: 'black',
          textAlign: 'center',
        }}>
       All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  );
}
