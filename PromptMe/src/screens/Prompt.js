import { StatusBar } from "expo-status-bar";
import * as React from 'react';
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
import { useState } from "react";
import Header from "../components/header";


export default function Prompt({navigation}) {
  const [data, setData] = useState([
    { data: "Dummy Data 1", key: 1 },
    { data: "Dummy Data 2", key: 2 },
    { data: "Dummy Data 3", key: 3 },
    { data: "Dummy Data 4", key: 4 },
    { data: "Dummy Data 5", key: 5 },
    { data: "Dummy Data 6", key: 6 },
    { data: "Dummy Data 7", key: 7 },
    { data: "Dummy Data 8", key: 8 },
    { data: "Dummy Data 9", key: 9 },
    { data: "Dummy Data 10", key: 10 },
    { data: "Dummy Data 11", key: 11 },
    { data: "Dummy Data 12", key: 12 },
    { data: "Dummy Data 13", key: 13 },
  ]);
 

  return (

       
        <View>
          
        <ScrollView contentContainerStyle={styles.promptHolder}>
        <Header />
          <StatusBar></StatusBar>
            {data.map((item) => {
              return (
                <TouchableOpacity style={styles.promptOutterContainer} onPress={() => navigation.replace('MainFeed')} key={item.key}>
                
                 <View style={styles.promptDesign}></View>
                  <Text style={styles.item}>{item.data}</Text>
                
                </TouchableOpacity>
              );
            })}
        </ScrollView> 
        </View>
      
        
  );
          
}

const styles = StyleSheet.create({


  item: {
    marginTop: 24,
    padding: "5%",
    fontSize: 24,
    alignSelf: "center"
  },

  promptHolder: {
    backgroundColor: "white",
    paddingHorizontal: "5%",
    paddingVertical: "10%",
    alignItems: 'center',

  },

  promptDesign: {
    backgroundColor: "#9300ff",
    paddingBottom: 30,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20
  }, 
  promptOutterContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    width: "70%",
    paddingBottom: "20%",
    shadowColor: "grey",
    marginTop: "10%",
    shadowOpacity: "0.7",
    shadowOffset: { width: -2, height: 4 },
  },


});