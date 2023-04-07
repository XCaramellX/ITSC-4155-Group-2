import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react'
import Background from '../components/Background'
import Header from "../components/header";
import MenuBar from "../components/MenuBar";
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
            
        <ScrollView contentContainerStyle={styles.scrollView}>
            <Header/> 
            <StatusBar></StatusBar>
            <BackButton goBack={onGoBack}/>  
            <Text style={styles.homeText}>Home</Text>
            <Text style={styles.homeTextUser}>Your Newest Post:</Text>
            
        
        {newPostData.map((postItem) => {
                return(
            <View style={styles.homeInnerContainer1} key={postItem.newPostKey}>
                
                
            </View>
           
           )
        })}
            <Text style={styles. homeTextOtherUser}>Other Posts:</Text>
            {otherUserData.map((userItem) => {
                return(
            
            <View style={styles.homeInnerContainer2} key={userItem.key}>
                
            </View>
                )
             })}
        
   
        </ScrollView>  
        <MenuBar/>
        </View>
    )
  }  
  
  const styles = StyleSheet.create ({
    scrollView: {
        backgroundColor: "white",
        paddingVertical: "10%"
        
    },

    menu: {
        bottom: "70%",
        alignSelf: "center",
        paddingTop: "20%",
        backgroundColor: "#9300ff"
    },
    homeInnerContainer1: {
       backgroundColor: 'white',
       borderRadius: 20,
       width: "90%",
       padding: "30%",
       shadowColor: "grey",
       marginTop: "5%",
       marginLeft: "5%",
       marginBottom: "5%",
       shadowOpacity: "0.7",
       shadowOffset: { width: -2, height: 2 },
    },  

    homeInnerContainer2: {
       backgroundColor: 'white',
       borderRadius: 20,
       width: "90%",
       padding: "30%",
       marginTop: "5%",
       marginLeft: "5%",
       marginBottom: "5%",
       shadowColor: "grey",
       shadowOpacity: "0.7",
       shadowOffset: { width: -2, height: 2 },
    },  
    
    homeText: {
        backgroundColor: 'white',
        color: "#9300ff",
        paddingLeft: "10%",
        paddingBottom: "10%",
        fontWeight: 'bold',
        fontSize: "20%"
    },

    homeTextUser: {
        backgroundColor: 'white',
        color: "#9300ff",
        paddingLeft: "5%",
        fontWeight: 'bold',
        fontSize: "15%"
    },

    homeTextOtherUser: {
        backgroundColor: 'white',
        paddingLeft: "5%",
        color: "#9300ff",
        alignSelf: "flex-start",
        fontWeight: 'bold',
        fontSize: "15%"
    }
  })
