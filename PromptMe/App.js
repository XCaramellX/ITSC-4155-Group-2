import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Prompts from './prompts';
import Header from './header';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.backgroundContainer}>
      <StatusBar style="auto" />
       <Header/>
       <Prompts/>
      </View>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  
});
