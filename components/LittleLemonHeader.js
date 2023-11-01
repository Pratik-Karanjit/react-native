import { View, Text, StyleSheet } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={headerStyles.container}>
      <Text
        style={headerStyles.innerContainer}>
        Little Lemon
      </Text>
    </View>
  );
}


let headerStyles = StyleSheet.create({
  container: {
    flex: 0.1, backgroundColor: '#F4CE14'
  },
  innerContainer: {
          padding: 20,
          fontSize: 30,
          color: 'black',
          textAlign: 'center'
  }
})