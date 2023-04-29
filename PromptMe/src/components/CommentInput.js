// CommentInput.js
import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import { TextInput as Input } from 'react-native-paper';

export default function CommentInput({ onSubmit }) {
  const [text, setText] = useState('');

  return (
    <View style={styles.container}>
      <Image
        style={styles.profilImage}
        source={require('../assets/default_profile_picture.png')}
      />
      <Input
        style={styles.input}
        label="Add a comment"
        value={text}
        onChangeText={setText}
        selectionColor="gray"
        underlineColor="transparent"
        mode="outlined"
        multiline={true}
        maxLength={1000}
        numberOfLines={3}

        clearButtonMode="always"
      />
      <TouchableOpacity onPress={() => onSubmit(text)}>
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
    bottom: 0
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
    width: '75%',
    backgroundColor: 'white',
    marginBottom: 10,
  },
});
