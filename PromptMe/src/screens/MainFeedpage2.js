import React, { useState, useEffect, useContext } from 'react';
import CommentBox from '../components/CommentBox';
import axios from 'axios';
import { AuthContext } from "../../context/auth";
import {
    View,
    StyleSheet,
    Text,
    keyboard,
    Keyboard,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Image,
    KeyboardAvoidingView,
    Button,
    Platform,
    StatusBar
} from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../themes/sign-in-theme';
// import Commentbox from '../components/Commentbox'
import BackButton from '../components/BackButton';
import MainFeedPage2BackButton from '../components/MainFeedPage2BackButton'
// import EditButton from '../components/EditButton'
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';
import TextInput from '../components/TextInput';
import User from '../../PromptMeDB/Models/user';
import Images from '../../PromptMeDB/Models/images';
import CommentIcon from '../assets/comment_icon.png';
import { IP } from '../components/IP';




export default function Mainfeedpage2({ route, navigation }) {
    const onGoBack = () => navigation.reset({
        index: 0,
        routes: [{ name: 'MainFeedScreen' }]
    })
    const { imageId } = route.params;
    const [userDetails, setUserDetails] = useState(null);
    const [comments, setComments] = useState([]);
    const [userPrompt, setUserPrompt] = useState(null);
    const [state, setState] = useContext(AuthContext);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    const [activeBtn, setActiveBtn] = useState("none");
    const {user} = state;
    const userId = user ? user._id : null;
    

    useEffect(() => {
        const userImages = async () => {
            if(imageId) {
            const res = await axios.get(`http://${IP}:8000/api/showImages/${imageId}?userId=${userId}`, imageId)
            setUserPrompt(res.data);
            setLikeCount(res.data.likes);
            setDislikeCount(res.data.dislikes);

            const userPostRes = await axios.get(`http://${IP}:8000/api/users/${res.data.user}`);
            setUserDetails(userPostRes.data);
       ;

            if(res.data.userLiked) {
                setActiveBtn("like");

            } else if(res.data.userDisliked){
                setActiveBtn("dislike");

            } else {
                setActiveBtn("none");
            }
            }
        };

        
        userImages();
        
    }, [imageId]);

    useEffect(() => {
        const getComments = async () => {
            try {
                const commentResponse = await axios.get(`http://${IP}:8000/api/comments/${imageId}`, {
                    params: { userId },
                });
                setComments(commentResponse.data)
            } catch (error) {
                console.error(error);
            }
        };
        
        getComments();
    }, [imageId, userId])

    const submitComment = async (commentText) => {
        try {
            const commentResponse = await axios.post(`http://${IP}:8000/api/comments`, {
                userId,
                imageId,
                commentText,
            });
            return commentResponse.data;
        } catch(error){
            console.error(error);
        }
    }
    const updateLikes = async() => {
        try{
            const likeResponse = await axios.put(`http://${IP}:8000/api/likes`, {
                imageId: userPrompt._id,
                userId: user._id,
            });
    
            setUserPrompt(likeResponse.data);
            setLikeCount(likeResponse.data.likes);
            setDislikeCount(likeResponse.data.dislikes);
            console.log("like saved")
            return likeResponse.data;
        } catch (err){
            console.log(err)
        }
    }

    const updateDislikes = async() => {
        try{
            const dislikeResponse = await axios.put(`http://${IP}:8000/api/dislikes`, {
                imageId: userPrompt._id,
                userId: user._id,
            });
            
            setUserPrompt(dislikeResponse.data);
            setLikeCount(dislikeResponse.data.likes);
            setDislikeCount(dislikeResponse.data.dislikes);
            console.log("dislike saved")
            return dislikeResponse.data;
        } catch (err){
            console.log(err)
        }
    }

    //Show and hide Commentt Box

    const [shouldShow, setShouldShow] = useState(true);


    // Like Dislike
  

    const handleLikeClick = async () => {
        if(activeBtn !== "like") {
            setActiveBtn("like");
            await updateLikes();  
        }
    };
       
    

    const handleDisikeClick = async () => {
        if(activeBtn !== "dislike") {
            setActiveBtn("dislike");
            await updateDislikes();
        }
    };
       
   

    // Like Dislike




    const handleCommentSubmit = async (text) => {
        const newComment = await submitComment(text);
        if(newComment) {
        setComments([newComment, ...comments]);
        }
    };



    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <MainFeedPage2BackButton goBack={onGoBack} />
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <Image
                            style={styles.image}
                            source={require('../assets/default_profile_picture.png')}
                        />
                        <View style={{ marginLeft: 20 }}>
                            <Title
                                style={[
                                    styles.title,
                                    {
                                        marginTop: 2,
                                        marginBottom: 5,
                                    },
                                ]}>
                                {userDetails && userDetails.name}
                            </Title>
                            <Caption style={styles.caption}>@{userDetails && userDetails.name}</Caption>
                        </View>
                    </View>

                    <View
                        style={{
                            marginTop: 15,
                            borderTopColor: '#dddddd',
                            borderTopWidth: 4,
                            borderBottomColor: '#dddddd',
                            borderBotomWidth: 4,
                        }}>
                        <View
                            style={{
                                marginTop: 2,
                                marginBottom: 5,
                                padding: 10,
                                textAlign: 'center',
                                justifyContent: 'center',
                            }}>
                            {userPrompt && (
                            <>
                            <Title
                                style={{
                                    marginTop: 2,
                                    marginBottom: 5,
                                    padding: 10,
                                    textAlighn: 'center',
                                    justifyContent: 'center',
                                    fontSize: 20,
                                }}>
                                "{userPrompt.prompt}"
                            </Title>
                            <Image source={{ uri: userPrompt.url }} style={styles.postimagesStyle}></Image>
                            </>
                            )}
                        </View>
                    </View>
                </View>
                <View style={styles.headerFooterStyle}>

                    <View style={{
                        alignItems: "center", justifyContent: "center", backgroundColor: "#9300ff", width: '50%', borderRadius: 20, marginRight: 75,
                    }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                                style={[
                                    { padding: 10 },
                                    activeBtn === "like" ? {
                                        backgroundColor: "green",
                                        borderTopLeftRadius: 20,
                                        borderBottomLeftRadius: 20,
                                    } : {},
                                ]}
                                onPress={handleLikeClick}
                            >
                                <Text>👍 Like | {likeCount}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[
                                    { padding: 10 },
                                    activeBtn === "dislike" ? {
                                        backgroundColor: "red", borderTopRightRadius: 20,
                                        borderBottomRightRadius: 20,
                                    } : {},
                                ]}
                                onPress={handleDisikeClick}
                            >
                                <Text>👎 Dislike | {dislikeCount}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{
                        alignItems: "center", justifyContent: "center", backgroundColor: "#9300ff", width: '15%', borderRadius: 20, marginLeft: 5,
                    }}>
                        <TouchableOpacity

                            onPress={() => setShouldShow(!shouldShow)}
                        >
                            <Image
                                style={styles.Icon}
                                source={require('../assets/comment_icon.png')}
                            />
                        </TouchableOpacity>

                    </View>


                </View>

                <ScrollView>
                    <View>
                        <CommentList comments={comments.map(comment => ({author: comment.user.name, content: comment.commentText, _id: comment._id}))} />
                    </View>
                </ScrollView>
            </ScrollView>
            {shouldShow ?
                (
                    <CommentInput onSubmit={handleCommentSubmit} />

                ) : null}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight: 0,
    },
    userInfoSection: {
        justifyContent: 'center',
        paddingHorizontal: 30,
        marginTop: 15,
        backgroundColor: '#eee',

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    postimagesStyle: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: 100,
        height: 100,
        alignSelf: "center",
        resizeMode: "contain",
        shadowColor: "grey",
        shadowOpacity: "0.7",
        shadowOffset: { width: -2, height: 2 },
    },

    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },

    headerFooterStyle: {
        width: '100%',
        height: 75,
        marginBottom: 15,
        borderTopColor: '#dddddd',
        borderTopWidth: 4,
        borderBottomColor: '#dddddd',
        borderBottomWidth: 4,

        alignItems: "center",
        justifyContent: "center",
        padding: 8,
        flexDirection: 'row',

    },
    textStyle: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18,
        padding: 7,
    },

    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#dddddd',
        borderBottomWidth: 1,
        borderTopColor: '#dddddd',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },

    accountImage: {
        resizeMode: 'cover',
    },

    scrollView: {
        backgroundColor: 'white',
        paddingVertical: '10%',
    },
    back: {
        top: '30%',
    },
    textBox: {
        top: 300,
    },

    textLocation: {
        top: '200%',
        left: '42%',
    },

    textLocation2: {
        top: '15%',
        left: '42%',
    },

    image: {
        width: 50,
        height: 50,
    },
    image2: {
        width: 30,
        height: 30,
        left: '20%',
    },
    image3: {
        width: '25%',
        height: '25%',
        bottom: '0%',
        borderRadius: '45%',
        objectfit: 'cover',
        resiveMode: 'cover',
    },

    commentBox: {
        backgroundColor: theme.colors.background,
        padding: 2,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
    },

    row: {
        top: '80%',
        flexDirection: 'row',
    },
    Icon: {
        width: 40,
        height: 40,
    },
});