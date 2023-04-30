// CommentInput.js
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import TextInput from '../components/TextInput'

export default function CommentInput({ onSubmit }) {
  const [text, setText] = useState('');

  const changeHandler = (val) => {
    setText(val);
  };

  const submitButtonHandler = () => {
    Keyboard.dismiss();
    if (text.trim().length !== 0) {
      onSubmit(text);
    }

    setTimeout(() => {
      setText('');
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.profilImage}
        source={require('../assets/default_profile_picture.png')}
      />
      <TextInput
        style={styles.input}
        label="Add a comment"
        selectionColor="gray"
        underlineColor="transparent"
        mode="outlined"
        multiline={true}
        maxLength={1000}
        numberOfLines={3}
        onChangeText={changeHandler}
        value={text}
      />

      <TouchableOpacity onPress={submitButtonHandler}>
        <Image
          style={styles.sendIcon}
          source={require('../assets/send_icon.png')}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 1,
    flexDirection: 'row',
    bottom: 0,
  },
  profilImage: {
    width: 40,
    height: 40,
    margin: 12,
  },
  sendIcon: {
    width: 30,
    height: 30,
    margin: 15,
  },
  input: {
    width: 250,
    backgroundColor: 'white',
  },
});
