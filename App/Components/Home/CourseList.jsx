import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { getCourseList } from '../../Services';

export default function CourseList({ courseLevel }) {
  useEffect(function () {
    const getCourses = async courseLevel => {
      const result = await getCourseList(courseLevel);
      console.log(result);
    };
    getCourses(courseLevel);
  }, []);

  return (
    <View>
      <Text>CourseList</Text>
    </View>
  );
}
