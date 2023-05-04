import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../../context/auth";
import Background from '../components/Background';
import UploadButton from '../components/UploadButton';
import UploadCaption from '../components/UploadCaption';
import UploadSwitch from '../components/UploadSwitch';
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import * as ImagePicker from "expo-image-picker";
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { IP } from '../components/IP';
import { Text } from 'react-native-paper';
import { StyleSheet, TouchableOpacity, View, Image, KeyboardAvoidingView, SafeAreaView } from 'react-native';


export default function ProfilePic({ navigation }) {

}