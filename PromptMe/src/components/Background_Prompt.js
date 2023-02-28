import React from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, View} from 'react-native'
import { theme } from '../themes/sign-in-theme'

export default function Background({children}) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
        {children}
      </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContainer: {
    backgroundColor: theme.colors.background,
    justifyContent: 'flex-start',
    flexGrow: 1,
    flexDirection: 'column',
   
  },
})
