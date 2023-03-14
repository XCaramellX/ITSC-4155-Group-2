import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react'
import Background from '../components/Background'
import Header from "../components/header";
import BackButton from "../components/BackButton";
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



  export default function MainFeed({navigation}) {
   const onGoBack = () => navigation.reset({
        index: 0,
        routes: [{ name: 'Prompt'}]
    })
    return (
    <View>
        <StatusBar></StatusBar>
        <ScrollView contentContainerStyle={styles.scrollView}>
        <Header/> 
        <BackButton goBack={onGoBack}/>  
        <Text style={styles.homeText}>Home</Text>
        <Text style={styles.homeTextUser}>Your Newest Post:</Text>
        <View style={styles.homeOutterContainer}>
            <View style={styles.homeInnerContainer}>
                
                
            </View>
            <View style={styles.homeInnerContainer1}>
                
                
            </View>
        </View>
        <Text style={styles. homeTextOtherUser}>Other Posts:</Text>
        </ScrollView>  
    </View>
    )
  }  
  
  const styles = StyleSheet.create ({
    scrollView: {
        minHeight: "100%"
    },
    homeOutterContainer: {
        backgroundColor: 'white',
        width: "100%",
        height: "100%",
        paddingTop: "10%",
        alignItems: "center"
    },
    homeInnerContainer: {
       backgroundColor: 'white',
       borderRadius: "20",
       width: "90%",
       height: "35%",
       shadowColor: "grey",
       marginBottom: "5%",
       shadowOpacity: "0.7",
       shadowOffset: { width: -2, height: 2 },
    },  

    homeInnerContainer1: {
       backgroundColor: 'white',
       borderRadius: "20",
       top: "13%",
       width: "90%",
       height: "35%",
       shadowColor: "grey",
       marginBottom: "5%",
       shadowOpacity: "0.7",
       shadowOffset: { width: -2, height: 2 },
    },  
    
    homeText: {
        backgroundColor: 'white',
        paddingLeft: "10%",
        paddingBottom: "10%",
        fontWeight: 'bold',
        fontSize: "20%"
    },

    homeTextUser: {
        backgroundColor: 'white',
        paddingLeft: "5%",
        fontWeight: 'bold',
        fontSize: "15%"
    },

    homeTextOtherUser: {
        bottom: "55%",
        paddingLeft: "5%",
        fontWeight: 'bold',
        fontSize: "15%"
    }
  })
