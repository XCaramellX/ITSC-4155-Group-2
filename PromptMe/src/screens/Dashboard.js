import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { FlatList,StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { useState } from 'react';
import Prompt from '../components/prompt';
import Header from '../components/header';
import Background from '../components/Background_Prompt'


export default function Dashboard() {
  
  return (
    <Background>
      <StatusBar style="auto" />
      <View style={styles.backgroundContainer}>
        <Header />
        <Prompt/>
      </View>
    </Background>
  );
  
}


const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexGrow: 1,
  },
});
