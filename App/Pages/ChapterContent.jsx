import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import Content from '../Components/ChapterContent/Content';
import ProgressBar from '../Components/ChapterContent/ProgressBar';
import { completedChapter } from '../Services';

export default function ChapterContent() {
  const [activePostion, setActivePosition] = useState(0);
  const handleActivePostion = () => {
    setActivePosition(a => a + 1);
  };

  const { params } = useRoute();
  const navigation = useNavigation();

  // useEffect(function () {
  //   console.log("Chapter Content ",params.chapterContent);
  //   console.log("Chapter ID ",params.chapterId);
  //   console.log("Record ID ",params.userCourseRecordId);
  // }, [params]);

  const handleChapterFinish = async () => {
    const result = await completedChapter(
      params.chapterId,
      params.userCourseRecordId
    );
    if (result) {
      ToastAndroid.show('Successfully Completed!!!', ToastAndroid.LONG);
      navigation.goBack();
    }
  };

  return (
    params.chapterContent && (
      <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <ProgressBar
          contentLength={params?.chapterContent?.length}
          contentPosition={activePostion}
        />
        <Content
          chapterContent={params?.chapterContent}
          onActivePosition={handleActivePostion}
          onChapterFinish={handleChapterFinish}
        />
      </View>
    )
  );
}
