import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useNavigation } from '@react-navigation/native'


export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => { navigation.navigate('ProfileScreen') }} style={styles.container}>
      <Image
        style={styles.image}
        source={require('../assets/default_profile_picture.png')}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 25 + getStatusBarHeight(),
    right: 4,
  },
  image: {
    width: 50,
    height: 50,
  },
})
