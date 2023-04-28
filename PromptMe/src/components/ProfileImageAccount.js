import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useNavigation } from '@react-navigation/native'

export default function BackButton() {
  return (
    <Image
      style={styles.image}
      source={require('../assets/default_profile_picture.svg')}
    />
  )
}

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
  },
})

