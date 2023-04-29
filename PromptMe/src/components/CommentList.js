// CommentList.js
import React from 'react';
import { View } from 'react-native';
import Comment from '../components/Comment';

const CommentList = ({ comments }) => {
  return (
    <View>
      {comments.map((comment, index) => (
        <Comment
          key={index}
          author={comment.author}
          content={comment.content}
          timestamp={comment.timestamp}
        />
      ))}
    </View>
  );
};

export default CommentList;
