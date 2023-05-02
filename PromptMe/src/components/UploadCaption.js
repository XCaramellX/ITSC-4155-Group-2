import React from 'react'
import { View, StyleSheet, Text, Keyboard, KeyboardAvoidingView } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../themes/sign-in-theme'

export default function UploadCaption({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        multiline={true}
        maxLength={500}
        numberOfLines={3}

        onSubmitEditing={Keyboard.dismiss}

        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '85%',
    alignSelf: "center",
    top: 80,
    zIndex: 1,
  },
  input: {
    backgroundColor: theme.colors.surface,
    height: 150,
  },
  description: {
    fontSize: 15,
    color: theme.colors.secondary,
    paddingTop: 5,

  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})

