import React from 'react';
import { Text, View } from 'react-native';
import Colors from '../../Common/Colors';

export default function CourseProgressBar({ totalChapter, completedChapter }) {
  const width = (completedChapter / totalChapter) * 100 + '%';
  return (
    <View
      style={{
        width: '100%',
        height: 7,
        borderRadius: 99,
        backgroundColor: Colors.GRAY,
      }}>
      <View
        style={{
          width: width,
          height: 7,
          borderRadius: 99,
          backgroundColor: Colors.PRIMARY,
        }}></View>
    </View>
  );
}
