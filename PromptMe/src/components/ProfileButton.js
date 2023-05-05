import React, { useEffect, useState, useContext } from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../context/auth'




export default function BackButton() {
  const navigation = useNavigation();
  const [state, setState] = useContext(AuthContext);
  const [ currUser, setCurrUser ] = useState("");

  useEffect(() => {
    if (state) {
        const { image_url } = state.user;
        setCurrUser(image_url);
    };
}, [state]);

  return (
    <TouchableOpacity onPress={() => { navigation.navigate('MainFeedScreen', { screen: 'Profile' }) }} style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: currUser }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    right: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius:(100*100)/2
  },
})
