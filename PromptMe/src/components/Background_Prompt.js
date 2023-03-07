import React from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, View} from 'react-native'
import { theme } from '../themes/sign-in-theme'

export default function Background({children}) {
  return (
    <View contentContainerStyle={styles.backgroundContainer}>
        {children}
      </View>
  )
}

const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: theme.colors.background,
    minHeight: '100%'
    
  },
})
