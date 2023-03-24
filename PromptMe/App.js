import React, { useEffect, useState } from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/themes/sign-in-theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  Prompt,
  MainFeed,
  Dashboard,
} from './src/screens';
import axios from 'axios';


const Stack = createStackNavigator();

export default function App() {

  //Fetch api for app to use
  const fetchApi = async () => {
    try {
      const res = await axios.get('http://192.168.1.221:8000/');
      console.log(res.data);
    } catch(err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    fetchApi()
  }, []);

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{ headerShown: false }}>
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Prompt" component={Prompt} />
          <Stack.Screen name="MainFeed" component={MainFeed} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
