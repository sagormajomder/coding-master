import React from 'react';
import { StyleSheet, View } from 'react-native';
import CourseList from '../Components/Home/CourseList';
import Header from '../Components/Home/Header';

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Header />
      <View style={styles.courseListContainer}>
        <CourseList courseLevel='Basic' />
        <CourseList courseLevel='Advance' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
  courseListContainer: { padding: 20, marginTop: -90, gap: 20 },
});
