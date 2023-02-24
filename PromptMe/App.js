import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FirstPrompt from './components/prompt-1';
import SecondPrompt from './components/prompt-2';
import Header from './components/header';

export default function App() {
  return (
    <NavigationContainer>
      <Header/>
      <StatusBar style="auto" />
      <View style={styles.backgroundContainer}>
       <FirstPrompt/>
       <SecondPrompt/>
      </View>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'white',
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  
});
