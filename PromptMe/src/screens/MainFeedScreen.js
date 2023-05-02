import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from 'react'
import Background from '../components/Background'
import Header from "../components/header";
import BackButton from "../components/BackButton";
import ProfileButton from "../components/ProfileButton.js";
import { AuthContext } from "../../context/auth";
import axios from 'axios';

import {
    FlatList,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Image
} from "react-native";
import { theme } from '../themes/sign-in-theme'



export default function MainFeed({ navigation}) {
    const onGoBack = () => navigation.reset({
        index: 0,
        routes: [{ name: 'Prompt' }]
    })

   // const [imagePost, setImagePost] = useState([]);

    const [images, setImages] = useState([]);
    const [state, setState] = useContext(AuthContext);

    useEffect(() => {
        if (state) {
          const {id} = state.user;
      
        };
      }, [state]);

   const getImagePost = async () => {

        const getImageResponse = await axios.get(`http://172.16.9.28:8000/api/showImages`);
        setImages(getImageResponse.data);
    }
  
    useEffect(() => {
      getImagePost();
    }, []);  

   /* const [otherUserData] = useState([
        { data: imagePost[0], key: 1 },
        

    ]) */

  
    return (

        <View>
            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                <Header />
                <StatusBar></StatusBar>
                <BackButton goBack={onGoBack} />
                <ProfileButton />

                <Text style={styles.homeText}>Home</Text>
                    
            
                <Text style={styles.homeTextOtherUser}>Post Feed:</Text>
                {images &&
                    images.map((image) => (
                   

                        <TouchableOpacity style={styles.homeInnerContainer2} key={image._id} onPress={() => { navigation.navigate('MainFeedpage2', {imageId: image._id})}}>
                            <Image source={{uri: image.url}} style={styles.imagesStyle}/>
                        </TouchableOpacity>
                    
                ))}


            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
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

    imagesStyle: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 200,
        height: 200,
        resizeMode: "contain",
        shadowColor: "grey",
        shadowOpacity: "0.7",
        shadowOffset: { width: -2, height: 2 },
        alignSelf: 'center',
    },

    homeText: {
        backgroundColor: 'white',
        color: "#9300ff",
        paddingLeft: "10%",
        paddingBottom: "10%",
        fontWeight: 'bold',
        fontSize: 20
    },

    homeTextUser: {
        backgroundColor: 'white',
        color: "#9300ff",
        paddingLeft: "5%",
        fontWeight: 'bold',
        fontSize: 15
    },

    homeTextOtherUser: {
        backgroundColor: 'white',
        paddingLeft: "5%",
        color: "#9300ff",
        alignSelf: "flex-start",
        fontWeight: 'bold',
        fontSize: 15
    }
})
