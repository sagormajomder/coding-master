import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import ChapterSection from '../Components/CourseDetail/ChapterSection';
import DetailSection from '../Components/CourseDetail/DetailSection';

export default function CourseDetail() {
  const navigation = useNavigation();
  const { params } = useRoute();
  // useEffect(function () {}, [params.course]);

  return (
    params.course && (
      <View>
        <ScrollView>
          <View style={{ padding: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name='arrow-back-circle-sharp'
                size={40}
                color='black'
              />
            </TouchableOpacity>
            <DetailSection course={params.course} />
            <ChapterSection chapterList={params.course.chapters} />
          </View>
        </ScrollView>
      </View>
    )
  );
}
