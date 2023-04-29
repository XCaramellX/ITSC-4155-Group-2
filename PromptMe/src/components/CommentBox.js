import React from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../themes/sign-in-theme'

export default function CommentBox({ children }) {
    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            {children}
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        width: '100%',
        alignSelf: 'center',
        justifyContent: 'center',
    },
})
