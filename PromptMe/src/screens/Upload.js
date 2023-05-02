import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/auth";
import Background from '../components/Background'
import UploadButton from '../components/UploadButton'
import UploadCaption from '../components/UploadCaption'
import UploadSwitch from '../components/UploadSwitch'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import * as ImagePicker from "expo-image-picker";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { Text } from 'react-native-paper'
import { StyleSheet, TouchableOpacity, View, Image, KeyboardAvoidingView, SafeAreaView } from 'react-native';

const WIDTH = 210;
const HEIGHT = 210;

export default function Upload({ navigation }) {

    const [prompt, setPrompt] = useState("");
    const [state, setState] = useContext(AuthContext);

    const [image, setImage] = useState({ url: '', id: '' });
    const [uploadImage, setUploadImage] = useState("");

    useEffect(() => {
        if (state) {
            const { prompt } = state.user;
            setPrompt(prompt);
            // console.log(prompt);
        };
    }, [state]);



    const handleUpload = async () => {
        let permResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permResult.granted == false) {
            alert("Camera access is required");
            return;
        }
        let picked = await ImagePicker.launchImageLibraryAsync({
            //mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            base64: true,
        })
        if (picked.canceled === true) {
            //this.setState({image: permResult.uri});
            return;
        }
        let base64Image = `data:image/jpg;base64,${picked.base64}`;
        setUploadImage(base64Image);

        let storedData = await AsyncStorage.getItem("auth-rn");
        const parsed = JSON.parse(storedData);

        const { data } = await axios.post("http://172.16.9.28:8000/api/upload-image", {
            image: base64Image,
            user: parsed.user,
        });

    }

    return (

        <Background>

            <View style={pageStyles.containerAll}>
                <View style={pageStyles.header}>
                    <Text style={{ fontWeight: 'bold', top: '15%', left: -10, fontSize: 20 }}>PromptMe </Text>

                    <UploadSwitch></UploadSwitch>

                </View>


                <Text style={{ fontWeight: 'bold', top: '3%', alignSelf: "center", textAlign: 'center', fontSize: `15` }} >{prompt}</Text>

                <TouchableOpacity onPress={() => handleUpload()}>
                    <View style={{ alignSelf: "center", top: "20%", backgroundColor: 'lightgrey', opacity: .7, width: WIDTH, height: HEIGHT, borderRadius: (WIDTH * HEIGHT) / 2 }}>
                        <Image source={{ url: uploadImage }} />
                        <FontAwesome5 name="camera" size={135} color="#9300ff"
                            style={{ opacity: 0.7, paddingHorizontal: 37, paddingVertical: 20 }} />
                        <Text style={{ fontWeight: 'bold', bottom: '13%', alignSelf: "center", fontSize: 15, color: "black", paddingVertical: 20 }}>
                            Press to Upload
                        </Text>

                    </View>
                </TouchableOpacity>

                <UploadCaption
                    label="Enter Your Caption"
                >
                </UploadCaption>

                <View style={pageStyles.row}>
                    <UploadButton
                        mode="contained"
                        onPress={() => navigation.navigate('MainFeedScreen', { screen: 'Home' })}
                    >
                        Post
                    </UploadButton>

                    <UploadButton
                        mode="contained"
                        onPress={() => navigation.navigate('MainFeedScreen', { screen: 'Home' })}
                    >
                        Back
                    </UploadButton>
                </View>


            </View>

        </Background>
    )

}

const pageStyles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingVertical: 32,
        borderBottomWidth: 1,
        borderBottomColor: '#9300ff',
    },
    row: {
        top: '30%',
        width: '105%',
        alignSelf: "center",
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    containerAll: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
})

