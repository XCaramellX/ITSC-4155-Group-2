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
  TouchableOpacity,
  Modal,
  Dimensions
} from 'react-native';
import { theme } from '../themes/sign-in-theme';
import { SimpleModal } from '../components/SimpleModal';
import Header from '../components/header';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

export default function Prompt({ navigation }) {

  const [promptSelection, setPromptSelection] = useState("");
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  const [isModalVisible, setisModalVisible] = useState(false);
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
    res = await axios.get("http://172.16.9.28:8000/api/prompts");
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



  const promptSelected = async () => {
    setisModalVisible(false);
    const resp = await axios.post("http://172.16.9.28:8000/api/prompts", { email, prompt });
    
    if(resp.data.error){
      alert(resp.data.error)
    } else {
      setState(resp.data);
      await AsyncStorage.setItem('auth-rn', JSON.stringify(resp.data));
    }

    
  }




  return (


    <View>
      <ScrollView contentContainerStyle={styles.promptHolder}>
      <Header />
        <StatusBar></StatusBar>
        {data.map((item) => {
          return (
            <TouchableOpacity style={styles.promptOutterContainer} key={item.key} onPress={() => { setPrompt(item.data), setisModalVisible(true) }}>

              <View style={styles.promptDesign}></View>
              <Text style={styles.item}>{item.data}</Text>

            </TouchableOpacity>
          );
        })}
        <Modal
          transparent={true}
          animationType='fade'
          visible={isModalVisible}
          onRequestClose={() => { setisModalVisible(false) }}
        >
          <TouchableOpacity
            disabled={true}
            style={styles.container}
          >
            <View style={styles.modal}>
              <View style={styles.textView}>
                <Text style={styles.text}>Confirm prompt selection</Text>
              </View>
              <View style={styles.viewButton}>
                <TouchableOpacity style={styles.button} onPress={() => {promptSelected(), navigation.navigate('MainFeed'), alert("Prompt selection saved!") }}>
                  <Text style={[styles.text, { color: 'blue' }]}>Confirm</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setisModalVisible(false)}>
                  <Text style={[styles.text, { color: 'blue' }]}>Cancel</Text>
                </TouchableOpacity>

              </View>
            </View>
          </TouchableOpacity>
        </Modal>
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

  menu: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: "#9300ff",
    bottom: "25%",
    paddingBottom: "20%",
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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    height: HEIGHT_MODAL,
    width: WIDTH - 80,
    paddingTop: 10,
    backgroundColor: '#9300ff',
    borderRadius: 10,
  },
  textView: {
    flex: 1,
    alignItems: 'center'
  },
  text: {
    margin: 5,
    fontSize: 24,
    fontWeight: 'bold'
  },
  viewButton: {
    width: '100%',
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center'
  }


});