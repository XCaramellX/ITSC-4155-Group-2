import React from 'react'
import Background from '../components/Background'
import Header from '../components/Sign-In-Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import Header2 from '../components/header'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Header>Welcome</Header>
      <Header2>
        Prompt Me
      </Header2>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        Login
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        Sign Up
      </Button>

      <Button
      mode="outlined"
      onPress={() => navigation.navigate('TestScreen')}>
       Test Screen
      </Button>
    </Background>
  )
}
