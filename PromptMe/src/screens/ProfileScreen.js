import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    SectionList,
    Image,
    Button,
    useWindowDimensions,
} from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Text,
    TouchableRipple,
    Card,
    IconButton
} from 'react-native-paper';
import Background from '../components/Background';
import Header from '../components/Sign-In-Header';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import SelectDropdown from 'react-native-select-dropdown';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';
import { theme } from '../themes/sign-in-theme';
import { emailValidator } from '../validators/emailValidator';
import { passwordValidator } from '../validators/passwordValidator';
import { nameValidator } from '../validators/nameValidator';
import { TabView, SceneMap } from 'react-native-tab-view';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function RegisterScreen({ navigation }) {
    const [user, setUser] = useState([
        {
            name: 'John Doe',
            email: 'jDoe34@uncc.edu',
            category: 'Music',
            experience: 'Beginner',
            prompt: 'Hello from the back end, We are connected',
            key: 1,
        },
    ]);

    const [prompts, setPrompts] = useState([
        {
            category: 'Writing',
            experience: 'Beginner',
            content: 'Write a story about a character late to a special event.',
            key: 1,
        },
        {
            category: 'Writing',
            experience: 'Beginner',
            content: 'Write a story about a character late to a special event.',
            key: 1,
        },
        {
            category: 'Writing',
            experience: 'Beginner',
            content: 'Write a story about a character late to a special event.',
            key: 1,
        },
        {
            category: 'Writing',
            experience: 'Beginner',
            content: 'Write a story about a character late to a special event.',
            key: 1,
        },
        {
            category: 'Writing',
            experience: 'Beginner',
            content: 'Write a story about a character late to a special event.',
            key: 1,
        },
        {
            category: 'Writing',
            experience: 'Beginner',
            content: 'Write a story about a character late to a special event.',
            key: 1,
        },
    ]);

    const layout = useWindowDimensions();

    const [routes] = React.useState([
        { key: 'first', title: 'Posts' },
        { key: 'second', title: 'Comments' },
        { key: 'third', title: 'About' },
    ]);

    const [index, setIndex] = React.useState(0);

    const FirstRoute = () => (
        <ScrollView>
            {prompts.map((item) => {
                return (
                    <View style={styles.container}>
                        <Text style={styles.item}>{item.content}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );

    const SecondRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    );

    const ThirdRoute = () => (
        <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
    );

    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
    });

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {/* <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        src={require('../assets/default_profile_picture.svg')}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title
                            style={[
                                styles.title,
                                {
                                    marginTop: 15,
                                    marginBottom: 5,
                                },
                            ]}>
                            John Doe
                        </Title>
                        <Caption style={styles.caption}>@j_doe</Caption>
                    </View>
                </View>
            </View> */}
                {/* 
            <View style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color="#777777" size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>
                        Kolkata, India
                    </Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color="#777777" size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>
                        +91-900000009
                    </Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color="#777777" size={20} />
                    <Text style={{ color: '#777777', marginLeft: 20 }}>
                        john_doe@email.com
                    </Text>
                </View>
            </View> */}

                {/* <View style={styles.infoBoxWrapper}>
                <View
                    style={[
                        styles.infoBox,
                        {
                            borderRightColor: '#dddddd',
                            borderRightWidth: 1,
                        },
                    ]}>
                    <Title>34</Title>
                    <Caption>Follows</Caption>
                </View>
                <View style={styles.infoBox}>
                    <Title>12</Title>
                    <Caption>Posts</Caption>
                </View>
            </View> */}
                <BackButton goBack={navigation.goBack} />
                <View style={styles.cardContainer}>
                    <Card style={styles.cardProfile}>
                        <Card.Content style={styles.cardContent}>
                            <View style={styles.profilePictureContainer}>
                                <Image
                                    source={require('../assets/default_profile_picture.png')}
                                    style={styles.profilePicture}
                                />
                            </View>
                            <Text style={styles.name}>johnDoeXXXX</Text>
                            <Text style={styles.subtitle}>
                                @j_doe<Text style={styles.separator}></Text>{' '}
                                {/* <Text style={styles.link}>mdbootstrap.com</Text> */}
                            </Text>
                            {/* <View style={styles.socialMediaButtonsContainer}>
                            <IconButton icon="facebook" size={25} style={styles.socialMediaButton} />
                            <IconButton icon="twitter" size={25} style={styles.socialMediaButton} />
                            <IconButton icon="skype" size={25} style={styles.socialMediaButton} />
                        </View> */}
                        </Card.Content>
                    </Card>

                    <Card style={styles.cardInfo}>
                        <Card.Content>
                            <View style={styles.row}>
                                <Text style={styles.label}>Full Name</Text>
                                <Text style={styles.value}>Johnatan Smith</Text>
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.row}>
                                <Text style={styles.label}>Email</Text>
                                <Text style={styles.value}>example@example.com</Text>
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.row}>
                                <Text style={styles.label}>Category</Text>
                                <Text style={styles.value}>Art</Text>
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.row}>
                                <Text style={styles.label}>Experience</Text>
                                <Text style={styles.value}>Expert</Text>
                            </View>
                            <View style={styles.separator} />
                            <View style={styles.rowPrompt}>
                                <Text style={styles.label}>Prompt</Text>
                                <Text style={styles.value}>Create an original character. Any art style but maybe try a new one. Be detailed.</Text>
                            </View>
                        </Card.Content>
                    </Card>
                </View>

                {/* 
            <TabView

                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
            /> */}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        marginTop: 25,
        justifyContent: 'center'

    },

    cardContainer: {
        flex: 1,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tabView: {
        backgroundColor: 'black'
    },

    cardProfile: {
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 100,

        width: 350,
        height: 220

    },
    cardInfo: {
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 25,
        marginBottom: 25,
        width: 350,
        height: 320

    },
    cardContent: {
        alignItems: 'center',
    },
    profilePictureContainer: {
        marginTop: 10,
        marginBottom: 10,
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    subtitle: {
        fontSize: 16,
        color: 'grey',
        marginBottom: 15,
    },
    separator: {
        marginHorizontal: 5,
    },
    link: {
        color: 'blue',
        textDecorationLine: 'underline',
    },
    socialMediaButtonsContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    socialMediaButton: {
        marginHorizontal: 5,
    },


    userInfoSection: {
        justifyContent: 'center',
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
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

    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    rowPrompt: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 80,
    },
    label: {
        flex: 3,
        fontWeight: 'bold',
    },
    value: {
        flex: 7,
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
        marginVertical: 8,
    },
    // menuWrapper: {
    //   marginTop: 10,
    // },
    // menuItem: {
    //   flexDirection: 'row',
    //   paddingVertical: 15,
    //   paddingHorizontal: 30,
    // },
    // menuItemText: {
    //   color: '#777777',
    //   marginLeft: 20,
    //   fontWeight: '600',
    //   fontSize: 16,
    //   lineHeight: 26,
    // },
});

// <ScrollView>
//   {prompts.map((item) => {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.item}>{item.content}</Text>
//       </View>
//     );
//   })}
//   <View></View>
// </ScrollView>

// Tab View
// <TabView
//   navigationState={{ index, routes }}
//   renderScene={renderScene}
//   onIndexChange={setIndex}
//   initialLayout={{ width: layout.width }}
// />

// <View>
//   <TabView
//     navigationState={{ index, routes }}
//     renderScene={renderScene}
//     onIndexChange={setIndex}
//     initialLayout={{ width: layout.width }}
//   />
// </View>

//

// import React, { Component } from 'react'
// import {
//   Animated,
//   Image,
//   Platform,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from 'react-native'
// import { Icon } from 'react-native-elements'
// import {
//   TabView,
//   TabBar,
//   TabViewPagerScroll,
//   TabViewPagerPan,
// } from 'react-native-tab-view'
// import PropTypes from 'prop-types'

// import Posts from '../components/Posts'

// const styles = StyleSheet.create({
//   cardContainer: {
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//   },
//   headerContainer: {
//     alignItems: 'center',
//     backgroundColor: '#FFF',
//     marginBottom: 10,
//     marginTop: 45,
//   },
//   indicatorTab: {
//     backgroundColor: 'transparent',
//   },
//   scroll: {
//     backgroundColor: '#FFF',
//   },
//   sceneContainer: {
//     marginTop: 10,
//   },
//   socialIcon: {
//     marginLeft: 14,
//     marginRight: 14,
//   },
//   socialRow: {
//     flexDirection: 'row',
//   },
//   tabBar: {
//     backgroundColor: '#EEE',
//   },
//   tabContainer: {
//     flex: 1,
//     marginBottom: 12,
//   },
//   tabLabelNumber: {
//     color: 'gray',
//     fontSize: 12.5,
//     textAlign: 'center',
//   },
//   tabLabelText: {
//     color: 'black',
//     fontSize: 22.5,
//     fontWeight: '600',
//     textAlign: 'center',
//   },
//   userBioRow: {
//     marginLeft: 40,
//     marginRight: 40,
//   },
//   userBioText: {
//     color: 'gray',
//     fontSize: 13.5,
//     textAlign: 'center',
//   },
//   userImage: {
//     borderRadius: 60,
//     height: 120,
//     marginBottom: 10,
//     width: 120,
//   },
//   userNameRow: {
//     marginBottom: 10,
//   },
//   userNameText: {
//     color: '#5B5A5A',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   userRow: {
//     alignItems: 'center',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     marginBottom: 12,
//   },
// })

// class Profile2 extends Component {
//   static propTypes = {
//     avatar: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     bio: PropTypes.string.isRequired,
//     containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
//     tabContainerStyle: PropTypes.oneOfType([
//       PropTypes.object,
//       PropTypes.number,
//     ]),
//     posts: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         words: PropTypes.string.isRequired,
//         sentence: PropTypes.string.isRequired,
//         paragraph: PropTypes.string.isRequired,
//         image: PropTypes.string,
//         user: PropTypes.shape({
//           name: PropTypes.string.isRequired,
//           username: PropTypes.string.isRequired,
//           avatar: PropTypes.string.isRequired,
//           email: PropTypes.string.isRequired,
//         }),
//       })
//     ).isRequired,
//   }

//   static defaultProps = {
//     containerStyle: {},
//     tabContainerStyle: {},
//   }

//   state = {
//     tabs: {
//       index: 0,
//       routes: [
//         { key: '1', title: 'active', count: 31 },
//         { key: '2', title: 'like', count: 86 },
//         { key: '3', title: 'following', count: 95 },
//         { key: '4', title: 'followers', count: '1.3 K' },
//       ],
//     },
//   }

//   onPressPlace = () => {
//     console.log('place')
//   }

//   handleIndexChange = index => {
//     this.setState({
//       tabs: {
//         ...this.state.tabs,
//         index,
//       },
//     })
//   }

//   renderTabBar = props => {
//     return <TabBar
//       indicatorStyle={styles.indicatorTab}
//       renderLabel={this.renderLabel(props)}
//       pressOpacity={0.8}
//       style={styles.tabBar}
//       {...props}
//     />
//   };

//   renderLabel = props => ({ route }) => {
//     const routes = props.navigationState.routes

//     let labels = []
//     routes.forEach((e, index) => {
//       labels.push(index === props.navigationState.index ? 'black' : 'gray')
//     })

//     const currentIndex = parseInt(route.key) - 1
//     const color = labels[currentIndex]

//     return (
//       <View>
//         <Animated.Text style={[styles.tabLabelText, { color }]}>
//           {route.count}
//         </Animated.Text>
//         <Animated.Text style={[styles.tabLabelNumber, { color }]}>
//           {route.title}
//         </Animated.Text>
//       </View>
//     )
//   }

//   renderScene = ({ route: { key } }) => {
//     const { posts } = this.props

//     switch (key) {
//       case '1':
//         return <Posts containerStyle={styles.sceneContainer} posts={posts} />
//       case '2':
//         return <Posts containerStyle={styles.sceneContainer} posts={posts} />
//       case '3':
//         return <Posts containerStyle={styles.sceneContainer} posts={posts} />
//       case '4':
//         return <Posts containerStyle={styles.sceneContainer} posts={posts} />
//       default:
//         return <View />
//     }
//   }

//   renderContactHeader = () => {
//     const { avatar, name, bio } = this.props

//     return (
//       <View style={styles.headerContainer}>
//         <View style={styles.userRow}>
//           <Image
//             style={styles.userImage}
//             source={{uri: avatar}}
//           />
//           <View style={styles.userNameRow}>
//             <Text style={styles.userNameText}>{name}</Text>
//           </View>
//           <View style={styles.userBioRow}>
//             <Text style={styles.userBioText}>{bio}</Text>
//           </View>
//         </View>
//         <View style={styles.socialRow}>
//           <View>
//             <Icon
//               size={30}
//               type="entypo"
//               color="#3B5A98"
//               name="facebook-with-circle"
//               onPress={() => console.log('facebook')}
//             />
//           </View>
//           <View style={styles.socialIcon}>
//             <Icon
//               size={30}
//               type="entypo"
//               color="#56ACEE"
//               name="twitter-with-circle"
//               onPress={() => console.log('twitter')}
//             />
//           </View>
//           <View>
//             <Icon
//               size={30}
//               type="entypo"
//               color="#DD4C39"
//               name="google--with-circle"
//               onPress={() => console.log('google')}
//             />
//           </View>
//         </View>
//       </View>
//     )
//   }

//   render() {
//     return (
//       <ScrollView style={styles.scroll}>
//         <View style={[styles.container, this.props.containerStyle]}>
//           <View style={styles.cardContainer}>
//             {this.renderContactHeader()}
//             <TabView
//               style={[styles.tabContainer, this.props.tabContainerStyle]}
//               navigationState={this.state.tabs}
//               renderScene={this.renderScene}
//               renderTabBar={this.renderTabBar}
//               onIndexChange={this.handleIndexChange}
//             />
//           </View>
//         </View>
//       </ScrollView>
//     )
//   }
// }

// export default Profile2
