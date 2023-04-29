// Comment.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Comment = ({ author, content, timestamp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.author}>{author}</Text>
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
  author: {
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
