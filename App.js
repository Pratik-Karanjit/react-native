import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';

//APP
export default function App() {
  // hi
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#495E57',
        justifyContent: 'space-between', 
      }}>
      <LittleLemonHeader />
      <LittleLemonFooter />
    </View>
  );
}
