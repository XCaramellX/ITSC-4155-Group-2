import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import {useFonts} from 'expo-font';

const header = () =>  {
  const [fontsLoaded] = useFonts({
    'Stay-Classy': require('../assets/fonts/Stay-Classy-SLDT.otf'),
});

if(!fontsLoaded) {
    return null
}
  return (
      <View style={styles.headerContainer}>
        <StatusBar style="auto" />
        <Text style={styles.textStyle}>Prompt Me</Text>
      </View>
      
  );
  
}

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#b042ff',
    width: '100%',
    height: '10%',
  },
  textStyle: {
    color: 'black',
    top: '35%',
    left: '38%',
    fontFamily: 'Stay-Classy',
    fontSize: '35'
  }
});

export default header;