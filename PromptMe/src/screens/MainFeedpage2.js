import React, { useState, useEffect, } from 'react';
import CommentBox from '../components/CommentBox';
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
} from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import { TextInput as Input } from 'react-native-paper';
import { theme } from '../themes/sign-in-theme';
// import Commentbox from '../components/Commentbox'
import BackButton from '../components/BackButton';
import MainFeedPage2BackButton from '../components/MainFeedPage2BackButton'
// import EditButton from '../components/EditButton'
import { StatusBar } from 'expo-status-bar';
import CommentList from '../components/CommentList';
import CommentInput from '../components/CommentInput';
import TextInput from '../components/TextInput';

const initialComments = [
    { author: 'User1', content: 'Great post!', timestamp: '5 minutes ago' },
    {
        author: 'User2',
        content: 'Interesting perspective.',
        timestamp: '10 minutes ago',
    },
];

const postDetails = {
    title: 'Sample Post',
    author: 'Author1',
    content: 'This is a sample post.',
    imageURL: 'https://via.placeholder.com/300',
};

export default function Mainfeedpage2({ route, navigation }) {
    const onGoBack = () => navigation.reset({
        index: 0,
        routes: [{ name: 'MainFeedScreen' }]
    })
    const {image} = route.params;

    const [comments, setComments] = useState(initialComments);
    const [userPrompt, setUserPrompt] = useState("");

    const users = async (req, res) => {
        res = await axios.get("http://172.16.9.28:8000/api/users");
        setUserPrompt(
          res.data
            .map(prompt=> prompt.prompt)
        );
      }
    
    
    
    
      
    const handleCommentSubmit = (text) => {
        const newComment = {
            author: 'CurrentUser',
            content: text,
            timestamp: 'Just now',
        };
        setComments([newComment, ...comments]);
    };

    useEffect(() => {
        users()
      }, []);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <MainFeedPage2BackButton />
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
                                johnDoeXXXX
                            </Title>
                            <Caption style={styles.caption}>@j_doe</Caption>
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
                            <Title
                                style={{
                                    marginTop: 2,
                                    marginBottom: 5,
                                    padding: 10,
                                    textAlighn: 'center',
                                    justifyContent: 'center',
                                    fontSize: 20,
                                }}>
                                "{userPrompt}"
                            </Title>
                            <Image source={{uri: image.url}} style={styles.postimagesStyle}></Image>
                        </View>
                    </View>
                </View>
                <View style={styles.headerFooterStyle}>
                    <Text style={styles.textStyle}>This is Footer</Text>
                </View>

                <ScrollView>
                    <View>
                        <CommentList comments={comments} />
                    </View>
                </ScrollView>
            </ScrollView>

            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}></View>
            </View>
            <CommentInput onSubmit={handleCommentSubmit} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
        height: 45,
        backgroundColor: '#9300ff',
        marginBottom: 15,
        borderTopColor: '#dddddd',
        borderTopWidth: 4,
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
});
