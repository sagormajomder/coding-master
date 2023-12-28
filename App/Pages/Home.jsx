import React from 'react';
import { StyleSheet, View } from 'react-native';
import CourseList from '../Components/Home/CourseList';
import Header from '../Components/Home/Header';

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Header />
      <CourseList courseLevel='Basic' />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
});
