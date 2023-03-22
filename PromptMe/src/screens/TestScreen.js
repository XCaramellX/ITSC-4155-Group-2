import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react'
import Header from "../components/header";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TouchableOpacity
  } from "react-native";

  import { theme } from '../themes/sign-in-theme'


  export default function TestFeed({navigation}) {
    const [data] = useState([
        {data: "dummy data", key: 1},
        {data: "dummy data", key: 2},
        {data: "dummy data", key: 3},
        {data: "dummy data", key: 4},
        {data: "dummy data", key: 5},
        {data: "dummy data", key: 6},
        {data: "dummy data", key: 7},
        {data: "dummy data", key: 8},
        {data: "dummy data", key: 9},
        {data: "dummy data", key: 10},
    ])

    return(
       
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Header />
            <StatusBar></StatusBar>
            <View style={styles.promptHolder}>
            { data.map((item) => {
                return (
        <TouchableOpacity style={styles.promptOutterContainer} onPress={() => navigation.replace('MainFeed')} key={item.key}>
        <View style={styles.testView}>
            <Text style={styles.testText}>{item.data}</Text>
        </View>
        </TouchableOpacity>
   
                )
         })}
          </View>
        </ScrollView>
       
    )
  }


  const styles = StyleSheet.create ({
    promptHolder: {
        backgroundColor: "white",
        paddingTop: 50,
        paddingHorizontal: 20,
        alignItems: 'center',
    
      },

      promptOutterContainer: {
        backgroundColor: "white",
        borderRadius: "20",
        padding: 50,
        width: "70%",
        margin: "5%",
        shadowColor: "grey",
      
        shadowOpacity: "0.7",
        shadowOffset: { width: -2, height: 4 },
      },
    scrollView: {
        minHeight: "100%",
        backgroundColor: "white"
    },
    testView: {
        backgroundColor: "red",
        marginTop: "20%",
        padding: "10%"
 
    },

    testText: {
        color: "black",
    
    }
  })