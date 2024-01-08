import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, ToastAndroid, TouchableOpacity, View } from 'react-native';
import ChapterSection from '../Components/CourseDetail/ChapterSection';
import DetailSection from '../Components/CourseDetail/DetailSection';
import { enrolledCourse, getUserEnrolledCourse } from '../Services';

export default function CourseDetail() {
  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);
  const { user } = useUser();
  const navigation = useNavigation();
  const { params } = useRoute();
  useEffect(
    function () {
      if (user && params.course) {
        getEnrolledCourse(
          params.course.id,
          user.primaryEmailAddress.emailAddress
        );
      }
    },
    [params.course, user]
  );

  const createUserEnrolledCourse = async () => {
    const result = await enrolledCourse(
      params.course.id,
      user.primaryEmailAddress.emailAddress
    );

    if (result) {
      ToastAndroid.show('Course Enrollment Successful', ToastAndroid.LONG);
      getEnrolledCourse(
        params.course.id,
        user.primaryEmailAddress.emailAddress
      );
    }
  };

  const getEnrolledCourse = async (courseId, userEmail) => {
    const result = await getUserEnrolledCourse(courseId, userEmail);
    // console.log(result.userEnrolledCourses);
    setUserEnrolledCourse(result.userEnrolledCourses);
  };

  return (
    params.course && (
      <View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{ padding: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name='arrow-back-circle-sharp'
                size={40}
                color='black'
              />
            </TouchableOpacity>
            <DetailSection
              course={params.course}
              createUserEnrolledCourse={createUserEnrolledCourse}
              userEnrolledCourse={userEnrolledCourse}
            />
            <ChapterSection
              chapterList={params.course.chapters}
              userEnrolledCourse={userEnrolledCourse}
            />
          </View>
        </ScrollView>
      </View>
    )
  );
}
