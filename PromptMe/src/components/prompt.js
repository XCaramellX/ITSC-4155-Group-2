import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useState } from 'react';



const prompt = () =>  {
  const [text_list] = useState([
    {data: 'Dummy Data 1', key: 1},
    {data: 'Dummy Data 2', key: 2},
    {data: 'Dummy Data 3', key: 3},
    {data: 'Dummy Data 4', key: 4},
    {data: 'Dummy Data 5', key: 5},
    {data: 'Dummy Data 6', key: 6},
    {data: 'Dummy Data 7', key: 7},
    {data: 'Dummy Data 8', key: 8},
    {data: 'Dummy Data 9', key: 9},
    {data: 'Dummy Data 10', key: 10},
  ])
  return (
    
      <View style={styles.promptHolder}>
      {text_list.map(item => (
      <View style={styles.promptOutterContainer} key={item.key}>
        <StatusBar style="auto" />
        <View style={styles.promptInnerContainer}/>
        <Text>{item.data}</Text>
      </View>
      ))}
      </View>
  );
  S
}

const styles = StyleSheet.create({
  promptHolder: {
    backgroundColor: 'white',
    width: '70%',
    flexGrow: 1,
    top: '10%',
  },
  promptOutterContainer: {
    backgroundColor: 'white',
    borderRadius: '20',
    height: '15%',
    shadowColor: 'grey',
    marginBottom: '5%',
    shadowOpacity: '0.7',
    shadowOffset: {width: -2, height: 4},
  },
  promptInnerContainer: {
    backgroundColor: '#9300ff',
    height: '20%',
    borderTopLeftRadius: '20',
    borderTopRightRadius: '20'
  }
});

export default prompt;