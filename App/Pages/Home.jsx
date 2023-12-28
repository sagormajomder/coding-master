import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from '../Common/Colors';
import CourseList from '../Components/Home/CourseList';
import Header from '../Components/Home/Header';

export default function Home() {
  return (
   <View style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
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
  headerContainer: {
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.PRIMARY,
    height: 250,
  },
  courseListContainer: { padding: 20, marginTop: -90, gap: 20 },
});
