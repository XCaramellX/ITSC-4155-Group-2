import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Prompt from '../components/prompt';
import Header from '../components/header';
import Background from '../components/Background-prompt'
import { Children } from 'react/cjs/react.production.min';


export default function Dashboard() {
  return (
    <Background>
      <StatusBar style="auto" />
      <ScrollView contentContainerStyle={styles.backgroundContainer}>
        <Header />
        <Prompt />
      </ScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: '#ca8dfd',
    alignItems: 'center',
    flexGrow: 1,
    
  },
});
