import React, { useState, useEffect } from 'react';
import { Provider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from './src/themes/sign-in-theme';
import {
  StartScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  ProfileScreen,
  MainFeedpage2,
  Prompt
} from './src/screens';
import { AuthProvider } from './context/auth.js';
import MenuBar from './src/components/MenuBar';
import ProfilePic from './src/screens/ProfilePic';


const Stack = createStackNavigator();

export default function App() {

  return (
    <Provider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="Prompt" component={Prompt} />
            <Stack.Screen name="ProfilePic" component={ProfilePic} />
            <Stack.Screen name="MainFeedScreen" component={MenuBar} />
            <Stack.Screen
              name="ResetPasswordScreen"
              component={ResetPasswordScreen}
            />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen name="MainFeedpage2" component={MainFeedpage2} />


          </Stack.Navigator>
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  );
}
