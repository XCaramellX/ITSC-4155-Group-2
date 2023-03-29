import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/auth";
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
import Header from "../components/header";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function Prompt({ navigation }) {

  const [promptSelection, setPromptSelection] = useState("");
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useContext(AuthContext);

  useEffect(() => {
    if (state) {
      const { email, prompt } = state.user;
      setEmail(email);
      setPrompt(prompt);
      console.log(email);
      console.log(prompt);
    };
  }, [state]);

  

  const prompts = async (req, res) => {
    res = await axios.get("http://192.168.1.221:8000/api/prompts");
    setPromptSelection(res.data[0].content);
  }

  useEffect(() => {
    prompts()
  }, []);

  // console.log(promptSelection)

  const data = [
    { data: promptSelection, key: 1 },
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
  ]

  console.log(prompt);

  const promptSelected = async () => {
    const res = await axios.post("http://192.168.1.221:8000/api/prompts", { email, prompt });
    if (res.data.error) {
      console.log(res.data.error);
    } else {
      setState(res.data)
      await AsyncStorage.setItem('auth-rn', JSON.stringify(res.data))
      alert('New prompt selected');
      navigation.navigate('MainFeed');
    };
  }




  return (


    <View>

      <ScrollView contentContainerStyle={styles.promptHolder}>
        <Header />
        <StatusBar></StatusBar>
        {data.map((item) => {
          return (
            <TouchableOpacity style={styles.promptOutterContainer} key={item.key} onPress={() => { setPrompt(item.data) }}>

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