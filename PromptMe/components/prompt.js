import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

const prompt = () =>  {
  return (

      <View style={styles.promptOutterContainer}>
        <StatusBar style="auto" />
        <View style={styles.promptInnerContainer}/>
      </View>
  );
  
}

const styles = StyleSheet.create({
  promptOutterContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: '15%',
    borderRadius: '20',
    shadowColor: 'grey',
    shadowOpacity: '0.7',
    shadowOffset: {width: -2, height: 4},
  },
  promptInnerContainer: {
    backgroundColor: '#9300ff',
    height: '15%',
    borderTopLeftRadius: '20',
    borderTopRightRadius: '20'
  }
});

export default prompt;