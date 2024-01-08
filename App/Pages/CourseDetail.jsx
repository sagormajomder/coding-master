import { useUser } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, ToastAndroid, TouchableOpacity, View } from 'react-native';
import ChapterSection from '../Components/CourseDetail/ChapterSection';
import DetailSection from '../Components/CourseDetail/DetailSection';
import { CompletedChapterContext } from '../Context/CompletedChapterContext';
import { enrolledCourse, getUserEnrolledCourse } from '../Services';

export default function CourseDetail() {
  const { isChapterComplete, setIsChapterComplete } = useContext(
    CompletedChapterContext
  );

  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);
  const { user } = useUser();
  const navigation = useNavigation();
  const { params } = useRoute();
  useEffect(
    function () {
      // console.log('course -->', params.course);
      // console.log('user -->', user.primaryEmailAddress.emailAddress);

      if (user && params.course) {
        getEnrolledCourse(
          params?.course?.id,
          user?.primaryEmailAddress?.emailAddress
        );
      }
    },
    [params?.course, user]
  );

  useEffect(
    function () {
      isChapterComplete &&
        getEnrolledCourse(
          params?.course?.id,
          user?.primaryEmailAddress?.emailAddress
        );
    },
    [isChapterComplete]
  );

  const createUserEnrolledCourse = async () => {
    const result = await enrolledCourse(
      params?.course?.id,
      user?.primaryEmailAddress?.emailAddress
    );

    // console.log('createUserEnrolledCourse---> ', result);

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
    // console.log('getEnrolledCourse---> ', result.userEnrolledCourses);
    setUserEnrolledCourse(result?.userEnrolledCourses);
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
