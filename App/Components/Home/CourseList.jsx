import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import Colors from '../../Common/Colors';
import { getCourseList } from '../../Services';
import CourseHeading from './CourseHeading';
import CourseItem from './CourseItem';

export default function CourseList({ courseLevel }) {
  const [courseList, setCourseList] = useState([]);

  const navigation = useNavigation();

  useEffect(
    function () {
      const getCourses = async courseLevel => {
        const result = await getCourseList(courseLevel);
        setCourseList(result?.courses);
      };
      getCourses(courseLevel);
    },
    [courseLevel]
  );

  // Guard Clause
  if (!courseList.length) return;

  return (
    <View style={styles.cointainer}>
      <CourseHeading
        textColor={courseLevel === 'Basic' ? Colors.WHITE : Colors.BLACK}>
        {courseLevel} Courses
      </CourseHeading>
      <FlatList
        data={courseList}
        renderItem={itemData => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('course-detail', { course: itemData.item })
            }>
            <CourseItem itemData={itemData} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item?.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cointainer: { gap: 5 },
});
