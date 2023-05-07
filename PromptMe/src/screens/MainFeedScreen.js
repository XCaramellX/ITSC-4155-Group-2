import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useContext } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import Background from '../components/Background'
import Header from "../components/header";
import BackButton from "../components/BackButton";
import ProfileButton from "../components/ProfileButton.js";
import { AuthContext } from "../../context/auth";
import axios from 'axios';
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
    FlatList,
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    Image,
    Platform
} from "react-native";
import { theme } from '../themes/sign-in-theme';
import { IP } from '../components/IP';
import moment from 'moment';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";





export default function MainFeed({ navigation }) {
    const onGoBack = () => navigation.reset({
        index: 0,
        routes: [{ name: 'Prompt' }]
    })

    // const [imagePost, setImagePost] = useState([]);

    const [images, setImages] = useState([{}]);
    const [state, setState] = useContext(AuthContext);

    const posts = [];



    const getImagePost = async () => {

        await axios.get(`http://${IP}:8000/api/showImages`)
            .then(response => {
                const sortData = response.data.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });
                setImages(sortData);
            })
            .catch(error => {
                console.log(error)
            })
    }

   


    for (let x = 0; x < images.length; x++) {

        let y = moment(images[x].createdAt)

        const formattedDate = y.format('MM-DD-YYYY hh:mm a');


        const item = {
            key: x,
            userImage: images[x].user_image,
            userName: images[x].user,
            url: images[x].url,
            dateAndTime: formattedDate,
            likes: images[x].likes,
            id: images[x]._id
        }

        posts.push(item);
    }



    useFocusEffect(
        React.useCallback(() => {
            getImagePost();
        }, [])
    )

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
                    posts.map((item) => (

                        <View style={styles.homeInnerContainer2} key={item.key}>
                            <Image source={{ uri: item.userImage }} style={styles.userImage} />
                            <Text style={styles.userName}>{item.userName}</Text>
                            <Text style={styles.postedAt}>Posted @ {item.dateAndTime}</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('MainFeedpage2', { imageId: item.id }) }}>
                                <Image source={{ uri: item.url }} style={styles.imagesStyle} />
                            </TouchableOpacity>
                            <View style={styles.likesAndCommentsCon}>
                                <FontAwesome5 name='thumbs-up' size={25} style={{ color: theme.colors.primary, bottom: '-7%' }} />
                                <Text style={{ color: theme.colors.primary, left: '8%', bottom: '-9%' }}>{item.likes} Likes</Text>
                            </View>
                        </View>

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
        shadowOpacity: 0.7,
        shadowOffset: { width: -2, height: 2 },
    },

    homeInnerContainer2: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: "90%",
        padding: "10%",
        marginTop: "5%",
        marginLeft: "5%",
        marginBottom: "5%",
        shadowColor: "grey",
        shadowOpacity: 0.7,
        shadowOffset: { width: -2, height: 2 },
        ...Platform.select({
            android: {
                elevation: 5,
            }
        })
    },

    imagesStyle: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 200,
        height: 200,
        resizeMode: "contain",
        shadowColor: "grey",
        shadowOpacity: 0.7,
        shadowOffset: { width: -2, height: 2 },
        alignSelf: 'center',
        ...Platform.select({
            android: {
                elevation: 3,
            }
        })
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
    },
    userImage: {
        width: 70,
        height: 70,
        top: '-7%',
        left: '-7%',
        borderRadius: (70 * 70) / 2
    },
    userName: {
        color: theme.colors.primary,
        fontSize: 25,
        fontWeight: 'bold',
        left: '30%',
        top: '-30%'
    },
    postedAt: {
        fontSize: 12,
        fontStyle: 'italic',
        color: 'black',
        left: '30%',
        top: '-28%'
    },
    likesAndCommentsCon: {
        flexDirection: 'row'
    }
})
