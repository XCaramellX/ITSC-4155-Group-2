import React from 'react'
import { StyleSheet, KeyboardAvoidingView, ScrollView, View} from 'react-native'
import { theme } from '../themes/sign-in-theme'

export default function Background({children}) {
  return (
    <ScrollView>
        {children}
      </ScrollView>
  )
}

/*const styles = StyleSheet.create({
  backgroundContainer: {
    backgroundColor: theme.colors.background,
    alignContent: 'center',
    flexGrow: 1
  },
})
*/