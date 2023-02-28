import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useFonts} from 'expo-font';

const header = () =>  {
  const [fontsLoaded] = useFonts({
    'Stay-Classy': require('../assets/fonts/Stay-Classy-SLDT.otf'), // Stay Classy Font by Solid Type, Free for personal and commercial use https://www.behance.net/gallery/62208651/Stay-Classy-Free-Font
});

if(!fontsLoaded) {
    return null
}
  return (
    <View style={styles.backgroundContainer}>
      <Text style={styles.textStyle}>Prompt Me</Text>
      </View>
  );
  
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'white',
    alignItems:'center',
  }, 
  textStyle: {
    color: 'black',
    top: '70%',
    marginBottom: '20%',
    fontFamily: 'Stay-Classy',
    fontSize: '35'
  }
});

export default header;