import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, Text, ToastAndroid, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../../Common/Colors';

export default function ChapterSection({ chapterList, userEnrolledCourse }) {
  const navigation = useNavigation();

  // console.log(userEnrolledCourse[0].completedChapter);

  const onChapterPress = chapter => {
    if (userEnrolledCourse.length === 0) {
      ToastAndroid.show('Please Enroll First!', ToastAndroid.LONG);
      return;
    } else {
      navigation.navigate('chapter-content', {
        chapterContent: chapter.content,
        chapterId: chapter.id,
        userCourseRecordId: userEnrolledCourse[0].id,
      });
    }
  };

  const checkIsChapterCompleted = chapterId => {
    if (userEnrolledCourse[0]?.completedChapter?.length <= 0) {
      return false;
    }
    const result = userEnrolledCourse[0]?.completedChapter.find(
      item => item.chapterId === chapterId
    );
    return result;
  };

  return (
    chapterList && (
      <View
        style={{
          backgroundColor: Colors.WHITE,
          marginTop: 20,
          padding: 10,
          borderRadius: 15,
          gap: 10,
        }}>
        {/* <FlatList
          data={chapterList}
          style={{ paddingBottom: 200 }}
          renderItem={itemData => {
            return;
          }}
          keyExtractor={(item, index) => item?.id}
          showsVerticalScrollIndicator={false}
        /> */}

        <Text style={{ fontSize: 20, color: Colors.BLACK, fontWeight: '600' }}>
          Chapters
        </Text>

        {chapterList.map((item, index) => (
          <TouchableOpacity
            style={[
              {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
                borderWidth: 1,
                borderRadius: 10,
                borderColor: Colors.GRAY,
                backgroundColor: 'rgba(104, 87, 232, 0.11)',
              },
              userEnrolledCourse.length !== 0 && {
                borderColor: Colors.PRIMARY,
                backgroundColor: 'rgba(251,94,55,0.11)',
              },
            ]}
            onPress={() => onChapterPress(item)}
            key={index}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Text
                style={[
                  {
                    fontSize: 27,
                    fontWeight: '600',
                    color: Colors.GRAY,
                  },
                  userEnrolledCourse.length !== 0 && {
                    color: Colors.PRIMARY,
                  },
                ]}>
                {index < 10 ? '0' + index : index}
              </Text>
              <Text
                style={[
                  { fontSize: 21, color: Colors.GRAY },
                  userEnrolledCourse.length !== 0 && {
                    color: Colors.PRIMARY,
                  },
                ]}>
                {item.title}
              </Text>
            </View>
            {userEnrolledCourse.length === 0 ? (
              <Ionicons name='md-lock-closed' size={25} color={Colors.GRAY} />
            ) : (
              <Ionicons name='play-circle' size={25} color={Colors.PRIMARY} />
            )}
          </TouchableOpacity>
        ))}
      </View>
    )
  );
}
