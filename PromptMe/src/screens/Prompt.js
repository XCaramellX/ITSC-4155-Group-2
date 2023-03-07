import { StatusBar } from "expo-status-bar";
import * as React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import { theme } from '../themes/sign-in-theme'
import { useState } from "react";
import Header from "../components/header";

export default function Dashboard() {
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
  ]);
 

   

  return (
    <View >
       <StatusBar></StatusBar>
        <ScrollView contentContainerStyle={styles.scrollView} >
        <Header />
          <View style={styles.promptHolder}>
            {data.map((item) => {
              return (
                <View style={styles.promptOutterContainer} key={item.key}>
                  <View style={styles.promptInnerContainer}/>
                  <Text style={styles.item}>{item.data}</Text>
                </View>
              );
            })}
          </View>
        </ScrollView> 
        </View>
  );
          
}

const styles = StyleSheet.create({
  scrollView: {
   layoutMesasurement: {}
   
  },
  container: {
    backgroundColor: theme.colors.background,
    paddingTop: 40,
    paddingHorizontal: 20,
    top: "5%",
    alignItems: "center",
  },

  item: {
    marginTop: 24,
    padding: 30,
    fontSize: 24,
  },

  promptHolder: {
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 20,
    alignItems: 'center',

  },
  promptOutterContainer: {
    backgroundColor: "white",
    borderRadius: "20",
    width: "70%",
    height: "10%",
    shadowColor: "grey",
    marginBottom: "5%",
    shadowOpacity: "0.7",
    shadowOffset: { width: -2, height: 4 },
  },
  promptInnerContainer: {
    backgroundColor: "#9300ff",
    height: "15%",
    borderTopLeftRadius: "20",
    borderTopRightRadius: "20",
  },
});