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
import user from "../../PromptMeDB/Models/user";
import { Card, Button, Avatar } from 'react-native-paper';

const WIDTH = Dimensions.get('window').width;
const HEIGHT_MODAL = 150;

export default function Prompt({ navigation }) {

  const [promptSelection, setPromptSelection] = useState("");
  const [prompt, setPrompt] = useState("");
  const [email, setEmail] = useState("");
  // const [category, setCategory] = useState("");
  // const [experience, setExperience] = useState("");
  const [isModalVisible, setisModalVisible] = useState(false);
  const [state, setState] = useContext(AuthContext);
  const promptData = [];

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
    setPromptSelection(
      res.data
        .filter(promptFilter => promptFilter.category === state.user.category && promptFilter.experience === state.user.experience)
        .map(promptContent => promptContent.content)
    );
  }




  useEffect(() => {
    prompts()
  }, []);

  // console.log(promptSelection)

  for (let x = 0; x < promptSelection.length; x++) {
    const item = {
      data: promptSelection[x],
      key: x
    };

    promptData.push(item);
  }



  const promptSelected = async () => {
    setisModalVisible(false);
    const resp = await axios.post("http://172.16.9.28:8000/api/prompts", { email, prompt, category, experience });

    if (resp.data.error) {
      alert(resp.data.error)
    } else {
      setState(resp.data);
      await AsyncStorage.setItem('auth-rn', JSON.stringify(resp.data));
    }

  }




  return (


    <View>
      <ScrollView contentContainerStyle={styles.promptHolder} showsVerticalScrollIndicator={false}>
        <Header />
        <StatusBar></StatusBar>
        {promptData.map((item) => {
          return (
            <TouchableOpacity style={styles.promptOutterContainer} key={item.key} onPress={() => { setPrompt(item.data), setisModalVisible(true) }}>
              <Card style={styles.card}>
                <Card.Content>
                  <Text style={styles.title}>"{item.data}"</Text>
                  <View style={styles.divider} />
                  {/* <Text style={styles.subtitle}>
                    <Avatar.Icon size={24} icon="star" />
                    {' '}
                    Created by <Text style={styles.author}>{item.experience}</Text> on 11 April , 2021
                  </Text> */}
                  {/* <View style={styles.divider} />
                  <View style={styles.actions}>
                    <Button icon="cog" mode="text" color="#6c757d" compact>
                      Settings
                    </Button>
                    <Button icon="link" mode="text" color="#6c757d" compact>
                      Program link
                    </Button>
                    <Button icon="dots-horizontal" mode="text" color="#6c757d" compact>
                      More
                    </Button>
                    <Avatar.Image
                      size={35}
                      source={{ uri: 'https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp' }}
                      style={styles.avatar}
                    />
                    <Button icon="plus" mode="outlined" color="#212529" compact>
                      Add
                    </Button>
                  </View> */}
                </Card.Content>
              </Card>
              {/* <View style={styles.promptDesign}></View>
              <Text style={styles.item}>{item.data}</Text> */}

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
                <TouchableOpacity style={styles.button} onPress={() => { promptSelected(), navigation.navigate('MainFeedScreen', { screen: 'Home' }), alert("Prompt selection saved!") }}>
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
    alignItems: 'center',
    paddingBottom: "30%",


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
    width: "90%",
    shadowColor: "grey",
    marginTop: "10%",
    shadowOpacity: "0.7",
    shadowOffset: { width: -2, height: 4 },
  },
  container: {
    flex: 1,
    // opacity: 0.5,
    // backgroundColor: "black",
    alignItems: 'center',
    justifyContent: 'center'
  },
  modal: {
    opacity: 1,
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
  },
  card: {
    borderRadius: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  author: {
    fontWeight: 'bold',
    marginLeft: 4,
    marginRight: 8,
  },
  divider: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
    marginVertical: 16,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  avatar: {
    marginLeft: 16,
    marginRight: 8,
  },
});