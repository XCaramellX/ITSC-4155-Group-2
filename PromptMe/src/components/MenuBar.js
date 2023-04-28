import {StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import {useNavigation} from '@react-navigation/native'


export default function MenuBar() {
    const navigation = useNavigation();

    return (
    <View style={styles.menu}>
        <Text style={styles.uploadText} onPress={() => {navigation.navigate('Upload')}}>Upload</Text>
        <Text style={styles.homeText} onPress={() => {navigation.navigate('MainFeedScreen')}}>Home</Text>
        <Text style={styles.promptText} onPress={() => {navigation.navigate('Prompt')}}>Prompts</Text> 
    </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        bottom: 70,
        width: 500,
        paddingBottom: 20,
       
        backgroundColor: "#9300ff"
    },

    uploadText: {
   
        left: 300,
    },

    homeText: {
      
        left: 10
    },

    promptText: {
       
        left: 30
    }
})