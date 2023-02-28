import React from 'react'
import { StyleSheet, KeyboardAvoidingView } from 'react-native'
import { theme } from '../themes/sign-in-theme'

export default function Background({ children}) {
  
  return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        {children}
      </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flexGrow: 1,
    justifyContent: 'center',
  },
})
