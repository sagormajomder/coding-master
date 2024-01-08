import { useUser } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import Colors from '../../Common/Colors';
import { getAllProgressCourse } from '../../Services';
import CourseHeading from './CourseHeading';
import CourseItem from './CourseItem';

export default function CourseProgress() {
  const [progressCourseList, setProgressCourseList] = useState([]);

  const navigation = useNavigation();

  const { user } = useUser();

  useEffect(
    function () {
      user && getAllProgressCourseList(user.primaryEmailAddress.emailAddress);
    },
    [user]
  );

  const getAllProgressCourseList = async userEmail => {
    const result = await getAllProgressCourse(userEmail);
    // console.log(result.userEnrolledCourses);
    setProgressCourseList(result.userEnrolledCourses);
  };

  if (!progressCourseList.length) return;

  return (
    <View>
      <CourseHeading textColor={Colors.WHITE}>In Progress</CourseHeading>
      <FlatList
        style={{ marginTop: 5 }}
        data={progressCourseList}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ marginRight: 20 }}
            onPress={() =>
              navigation.navigate('course-detail', { course: item.course })
            }>
            <CourseItem
              item={item.course}
              completedChapter={item.completedChapter?.length}
            />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
