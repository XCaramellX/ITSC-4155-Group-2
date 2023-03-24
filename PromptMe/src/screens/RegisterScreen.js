import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Text } from 'react-native-paper'
import { SelectList } from 'react-native-dropdown-select-list'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Background from '../components/Background'
import Header from '../components/Sign-In-Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../themes/sign-in-theme'




export default function RegisterScreen({ navigation }) {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const [category, setCategory] = useState("");
  const [experience, setExperience] = useState("");


  const categories = [
    { key: '1', value: 'Art' },
    { key: '2', value: 'Music' },
    { key: '3', value: 'Writing' },
  ];

  const experiences = [
    { key: '1', value: 'Beginner' },
    { key: '2', value: 'Intermediate' },
    { key: '3', value: 'Expert' },
  ];

  const onSignUpPressed = async () => {
    if (email == "" || password == "" || name == "" || category == "" || experience == "") {
      alert("All fields must be filled out")
      return
    }

     const resp = await axios.post("http://localhost:8000/api/signup", {name, email, password, category, experience});
     console.log(resp.data);

    navigation.reset({
      index: 0,
      routes: [{ name: 'Prompt' }],
    })
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Header>Create Account</Header>
      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: '' })}
        // error={!!name.error}
        // errorText={name.error}
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        // error={!!email.error}
        // errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        // error={!!password.error}
        // errorText={password.error}
        secureTextEntry
      />
      <SelectList
        onSelect={() => console.log(category)}
        setSelected={(value) => setCategory(value)}
        data={categories}
        save="value"
        placeholder='Please select a category'
        inputStyles={{
          fontSize: 18,
          color: theme.colors.secondary,
        }}
        boxStyles={{
          borderRadius: 5,
          width: '100%',
          marginVertical: 12,
        }}
      />
      <SelectList
        onSelect={() => console.log(experience)}
        setSelected={(value) => setExperience(value)}
        data={experiences}
        save="value"
        search={false}
        placeholder='Please select an experience level'
        inputStyles={{
          fontSize: 18,
          color: theme.colors.secondary,
        }}
        boxStyles={{
          borderRadius: 5,
          width: '100%',
          marginVertical: 12,
        }}
      />

      {/* <SelectDropdown
        defaultButtonText='Please select a category'
        data={category}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
          console.log(category)
        }}
        
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
        buttonStyle={styles.dropDown}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={theme.colors.primary} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      />
      <SelectDropdown
        defaultButtonText='Please select an experience level'
        data={experience}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={(selectedItem, index) => {
          return selectedItem
        }}
        rowTextForSelection={(item, index) => {
          return item
        }}
        buttonStyle={styles.dropDown}
        buttonTextStyle={styles.dropdownBtnTxtStyle}
        renderDropdownIcon={isOpened => {
          return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={theme.colors.primary} size={18} />;
        }}
        dropdownIconPosition={'right'}
        dropdownStyle={styles.dropdownDropdownStyle}
        rowStyle={styles.dropdownRowStyle}
        rowTextStyle={styles.dropdownRowTxtStyle}
      /> */}
      <Button
        mode="contained"
        onPress={onSignUpPressed}
        style={{ marginTop: 24 }}
      >
        Sign Up
      </Button>
      <View style={styles.row}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
  dropDown: {
    marginTop: 4,
    marginBottom: 8,
    width: '100%',
    height: 45,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#9300ff',
    justifyContent: 'center',
  },
  dropdownBtnTxtStyle: { color: '#444', textAlign: 'center' },
  dropdownDropdownStyle: { backgroundColor: '#EFEFEF' },
  dropdownRowStyle: { backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5' },
  dropdownRowTxtStyle: { color: '#444', textAlign: 'center' },
  header: { textAlign: 'center' }
})
