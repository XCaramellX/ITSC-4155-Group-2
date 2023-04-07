import {StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useState, useEffect, useContext } from 'react';
import {useNavigation} from '@react-navigation/native'


export default function MenuBar() {
    const navigation = useNavigation();

    return (
    <View style={styles.menu}>
        <Text style={styles.menuText} onPress={() => {navigation.navigate('Upload')}}>Upload</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    menu: {
        bottom: "10%",
        width: "100%",
        alignSelf: "center",
        paddingBottom: "20%",
        backgroundColor: "#9300ff"
    },

    menuText: {
        marginTop: "10%",
        marginLeft: "10%"
    }
})