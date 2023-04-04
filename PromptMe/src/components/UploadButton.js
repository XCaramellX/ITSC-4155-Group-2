
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'

export default function UploadButton({ mode, style, ...props }) {
    return (
      <PaperButton
       style={[
          styles.button,
          mode === 'outlined' && { backgroundColor: theme.colors.surface },
          style,
        ]}
        labelStyle={styles.text}
        mode={mode}
        {...props}
        />
    )
  }

  const styles = StyleSheet.create({
    button: {
      width: '100%',
      marginVertical: 10,
      height: 100
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
      lineHeight: 50,
      width: 150,
    },
    
  })
