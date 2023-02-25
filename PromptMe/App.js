import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Prompt from './components/prompt';
import Header from './components/header';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.backgroundContainer}>
        <Header/>
        <Prompt/>
        <Prompt/>
      </ScrollView>
    </NavigationContainer>
  );
  
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: '#ca8dfd',
    alignItems: 'center',
    flex: 1,
  },

  
});
