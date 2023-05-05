import React, { useContext, useEffect, useState } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Button } from "react-native"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from 'expo-image-picker';
import UploadButton from "../components/UploadButton2";
import Header2 from '../components/header';
import Background from '../components/Background';
import { AuthContext } from "../../context/auth";
import { IP } from "../components/IP";
import axios from "axios";

export default function ProfilePic({ navigation }) {

    const [image, setImage] = useState({ url: '' });
    const [imageChoosen, setImageChoosen] = useState(false);
    const [toUpload, setToUpload] = useState("");
    const [state, setState] = useContext(AuthContext);
    const [pExist, setPExist] = useState("")
    const [u_name, setName] = useState("");

    useEffect(() => {
        if (state) {
            const { name, prompt } = state.user;
            setName(name);
            setPExist(prompt);
        };
    }, [state]);

    console.log(u_name);

    const openPicker = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Image Library access must be granted');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
            base64: true,
        });



        if (result.canceled === true) {
            setImageChoosen(false);
            return;
        } else {
            setImageChoosen(true);
        }

        console.log(result.mime);
        setToUpload(`data:image/jpg;base64,${result.base64}`);
        setImage({ url: result.uri })



    };

    const onHandleSubmit = async () => {
        const res = await axios.post(`http://${IP}:8000/api/profilepic`, { name: u_name, image: toUpload });
        console.log(res.data);

        //Navigate To next page
        if (pExist !== "default prompt") {
            navigation.naigate('MainFeedScreen', { screen: 'Home'});
        } else {
            navigation.navigate('Prompt');
        }
    }

    return (
        <Background>
            <Header2>Prompt Me</Header2>
            <KeyboardAwareScrollView contentCotainerStyle={styles.container}>


                <View style={{ marginVertical: 100 }}>
                    <TouchableOpacity onPress={() => openPicker()}>
                        <View style={[styles.imageContainer, imageChoosen ? styles.picChosen : styles.noPicChosen]}>
                            {image.url && <Image source={{ uri: image.url }} style={styles.imageStyles} />}
                            {!imageChoosen && <FontAwesome5 name="camera" size={75} color="darkmagenta" />}
                            {!imageChoosen && <Text>Press here to select image</Text>}
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => onHandleSubmit()}>
                    <UploadButton
                        mode="contained"
                        style={{ width: "75%", backgroundColor: 'darkmagenta', alignSelf: 'center' }}>
                        Upload Profile Picture
                    </UploadButton>
                </TouchableOpacity>
            </KeyboardAwareScrollView>
        </Background>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        width: 250,
        height: 250,
        borderRadius: (250 * 250) / 2
    },
    picChosen: {
        opacity: 1
    },
    noPicChosen: {
        opacity: 0.7
    },
    imageStyles: {
        width: 250,
        height: 250,
        borderRadius: (250 * 250) / 2,
    },
    bttnStyle: {
        color: 'darkmagenta',
        width: '100%',
        height: 50,
    }
})