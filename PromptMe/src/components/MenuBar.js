import {StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Prompt, MainFeedScreen, Upload, ProfileScreen } from '../screens';
import Ionicons from '@expo/vector-icons/Ionicons'
import { theme } from '../themes/sign-in-theme';

const bottomTab = createBottomTabNavigator();

const homeNm = 'Home';
const propNm = 'Prompt';
const uploadNm = 'Upload';
const profileNm = 'Profile';

export default function MenuBar() {
    

      return (
        <bottomTab.Navigator initialRouteName='Home'
        se
        screenOptions={({ route }) => ({
            headerShown:false,
            tabBarIcon: ({focused, color}) => {
                let iconName;
                let routeName = route.name;


                if (route.name === homeNm) {
                    iconName = focused ? 'home' : 'home-outline'
                } else if (route.name === propNm) {
                    iconName = focused ? 'list' : 'list-outline'
                } else if (route.name === uploadNm) {
                    iconName = focused ? 'cloud-upload' : 'cloud-upload-outline'
                } else if (route.name === profileNm) {
                    iconName = focused ? 'person' : 'person-outline'
                }

                return <Ionicons name={iconName} size={30} color={color}/>
            },
            tabBarActiveTintColor: theme.colors.primary,
            tabBarInactiveTintColor: 'grey',
            tabBarLabelStyle: { fontSize: 10, top: '5%'},
            tabBarIconStyle: { top: '5%' },
            tabBarHideOnKeyboard: true,
            tabBarStyle: styles.tabBar,
        })}>
        
          <bottomTab.Screen name={homeNm} component={MainFeedScreen} />
          <bottomTab.Screen name={propNm} component={Prompt} />
          <bottomTab.Screen name ={uploadNm} component={Upload} />
          <bottomTab.Screen name={profileNm} component={ProfileScreen} />
        </bottomTab.Navigator>
      )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: 'black',
        ...Platform.select({
            android: {
                height: 40
            },
            ios: {
                height: 70
            }
        })
        
    }
})