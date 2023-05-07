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
import { theme } from "../themes/sign-in-theme";

export default function ProfilePic({ navigation }) {

    const [image, setImage] = useState({ url: '' });
    const [url, setUrl] = useState("");
    const [public_id, setPublic_ID] = useState("");
    const [imageChoosen, setImageChoosen] = useState(false);
    const [toUpload, setToUpload] = useState("");
    const [state, setState] = useContext(AuthContext);
    const [prompt, setPrompt] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [category, setCategory] = useState("");
    const [experience, setExperience] = useState("");

    useEffect(() => {
        if (state) {
            const { name, email, category, experience, prompt, public_id, url } = state.user;
            setName(name);
            setEmail(email);
            setPrompt(prompt);
            setCategory(category);
            setExperience(experience);
            setPublic_ID(public_id);
            setUrl(url);
        };
    }, [state]);

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

        let storedData = await AsyncStorage.getItem("auth-rn");
        const parsed = JSON.parse(storedData);

        const { data } = await axios.post(`http://${IP}:8000/api/profilepic`, { user: parsed.user, image: toUpload });
        console.log("Upload Successful:", data);

        const stored = JSON.parse(await AsyncStorage.getItem("auth-rn"));
        stored.user = data;
        await AsyncStorage.setItem("auth-rn", JSON.stringify(stored));

        setState({...state, user: data});

        //Navigate To next page
        if (prompt !== "default prompt") {
            navigation.navigate('MainFeedScreen', { screen: 'Home' })
        } else {
            navigation.navigate('Prompt')
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
                        style={{ width: "75%", backgroundColor: theme.colors.primary, alignSelf: 'center' }}>
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