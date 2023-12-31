import { useAuth, useUser } from '@clerk/clerk-expo';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Colors from '../Common/Colors';
import CourseList from '../Components/Home/CourseList';
import CourseProgress from '../Components/Home/CourseProgress';
import Header from '../Components/Home/Header';
import { UserPointsContext } from '../Context/UserPointsContext';
import { createNewUser, getUserDetail } from '../Services';

export default function Home() {
  const [isHave, setIsHave] = useState(false);
  const { userPoints, setUserPoints } = useContext(UserPointsContext);

  const { isLoaded, signOut } = useAuth();
  const { user } = useUser();

  useEffect(
    function () {
      user && createUser();
    },
    [user]
  );

  const handleHavCourseProgress = value => {
    setIsHave(value);
  };

  const createUser = async () => {
    if (user) {
      const result = await createNewUser(
        user?.fullName,
        user?.primaryEmailAddress?.emailAddress,
        user?.imageUrl,
        userPoints
      );

      if (result) {
        getUser();
      }
    }
  };

  const getUser = async () => {
    const result = await getUserDetail(user?.primaryEmailAddress?.emailAddress);
    // console.log('GetUserDetails-->', result.userDetail?.point);
    setUserPoints(result.userDetail?.point);
  };

  return (
    <ScrollView style={styles.homeContainer}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <View style={styles.courseListContainer}>
        <CourseProgress
          courseLevel='In Progress'
          onHaveCourseProgress={handleHavCourseProgress}
        />
        <CourseList courseLevel='Basic' isHave={isHave} />
        <CourseList courseLevel='Advance' isHave={isHave} />
      </View>
    </ScrollView>
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
