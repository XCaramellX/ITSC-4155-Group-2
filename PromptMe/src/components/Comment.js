// Comment.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Comment = ({ author, content, timestamp }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        <Image
          style={styles.profilImage}
          source={require('../assets/default_profile_picture.png')}
        />
        <Text style={styles.author}>{author}</Text>
      </View>

      <Text style={styles.content}>{content}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  profilImage: {
    width: 25,
    height: 25,
    margin: 2,
  },
  author: {
    marginTop: 6,
    fontSize: 14,
    fontWeight: 'bold',
  },
  content: {
    fontSize: 16,
    marginBottom: 5,
  },
  timestamp: {
    fontSize: 12,
    color: 'grey',
  },
});

export default Comment;
