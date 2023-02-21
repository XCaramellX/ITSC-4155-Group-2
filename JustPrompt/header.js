import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const header = () =>  {
  return (
      <View style={styles.headerContainer}>
        <StatusBar style="auto" />
        <Text style={styles.textStyle}>PromptMe</Text>
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
    color: 'white',
    top: '60%',
    textStyle: ''
  }
});

export default header;