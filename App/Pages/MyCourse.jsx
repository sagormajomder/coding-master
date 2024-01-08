import { useUser } from '@clerk/clerk-expo';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../Common/Colors';
import CourseProgressItem from '../Components/MyCourse/CourseProgressItem';
import { getAllProgressCourse } from '../Services';

export default function MyCourse() {
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

  return (
    <View>
      <View
        style={{ height: 160, padding: 20, backgroundColor: Colors.PRIMARY }}>
        <Text style={{ fontSize: 30, color: Colors.WHITE }}>My Course</Text>
      </View>
      <View style={{ padding: 20 }}>
        <FlatList
          style={{ marginTop: -50 }}
          data={progressCourseList}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('course-detail', { course: item.course })
              }>
              <CourseProgressItem
                item={item.course}
                completedChapter={item.completedChapter?.length}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
