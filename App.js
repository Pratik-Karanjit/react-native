import { View } from 'react-native';
import LittleLemonHeader from './components/LittleLemonHeader';
import LittleLemonFooter from './components/LittleLemonFooter';
import WelcomeScreen from './components/WelcomeScreen';
import MenuItems from './components/MenuItems';

//APP
export default function App() {
  // hi
  //hi again
  // again
  // and again
  // again
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'space-between', 
      }}>

        {/* calling components here */}
      <LittleLemonHeader />
      {/* <MenuItems /> */}
      <WelcomeScreen></WelcomeScreen>
      <LittleLemonFooter />
    </View>
  );
}
