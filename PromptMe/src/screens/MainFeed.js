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

    const [otherUserData] = useState([
        {data: "dummy data", key: 1},
        {data: "dummy data", key: 2},
        {data: "dummy data", key: 3},
        {data: "dummy data", key: 4},
        
    ])

    const[newPostData] = useState([
        {newPostData: "dummy data", newPostKey: 1}
    ])

    return (
    <View>
        <StatusBar></StatusBar>
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Header/> 
            <BackButton goBack={onGoBack}/>  
            <Text style={styles.homeText}>Home</Text>
            <Text style={styles.homeTextUser}>Your Newest Post:</Text>
            
        <View style={styles.homeOutterContainer}>
        {newPostData.map((postItem) => {
                return(
            <View style={styles.homeInnerContainer} key={postItem.newPostKey}>
                
                
            </View>
           
           )
        })}
            <Text style={styles. homeTextOtherUser}>Other Posts:</Text>
            {otherUserData.map((userItem) => {
                return(
            
            <View style={styles.homeInnerContainer1} key={userItem.key}>
                
            </View>
                )
             })}
        </View>
        </ScrollView>  
    </View>
    )
  }  
  
  const styles = StyleSheet.create ({
    scrollView: {
        height: "100%"
    },
    homeOutterContainer: {
        backgroundColor: 'white',
        paddingTop: "10%",
        alignItems: "center"
    },
    homeInnerContainer: {
       backgroundColor: 'white',
       borderRadius: "20",
       width: "90%",
       height: "20%",
       shadowColor: "grey",
       marginBottom: "5%",
       shadowOpacity: "0.7",
       shadowOffset: { width: -2, height: 2 },
    },  

    homeInnerContainer1: {
       backgroundColor: 'white',
       borderRadius: "20",
       width: "90%",
       height: "20%",
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
        backgroundColor: 'white',
        paddingLeft: "5%",
        marginBottom: "10%",
        alignSelf: "flex-start",
        fontWeight: 'bold',
        fontSize: "15%"
    }
  })
