
import React from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native'
import { Button as PaperButton } from 'react-native-paper'
import { theme } from '../themes/sign-in-theme';



export default function UploadButton({ mode, style, ...props }) {
    return (
      <PaperButton
       style={[
          styles.button,
          mode === 'outlined' && { backgroundColor: theme.colors.primary },
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
      ...Platform.select({
        android: {
          width: '45%'
        },
        ios: {
          width: '100%'
        }
      }),
      marginVertical: 10,
      height: 50
    },
    text: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      paddingTop: 5
    },
    
  })
