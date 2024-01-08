import { useUser } from '@clerk/clerk-expo';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Text, ToastAndroid, View } from 'react-native';
import Content from '../Components/ChapterContent/Content';
import ProgressBar from '../Components/ChapterContent/ProgressBar';
import { CompletedChapterContext } from '../Context/CompletedChapterContext';
import { UserPointsContext } from '../Context/UserPointsContext';
import { completedChapter } from '../Services';

export default function ChapterContent() {
  const { isChapterComplete, setIsChapterComplete } = useContext(
    CompletedChapterContext
  );
  const { userPoints, setUserPoints } = useContext(UserPointsContext);

  const [activePostion, setActivePosition] = useState(0);
  const handleActivePostion = () => {
    setActivePosition(a => a + 1);
  };

  const { user } = useUser();

  const { params } = useRoute();
  const navigation = useNavigation();

  // useEffect(function () {
  //   console.log("Chapter Content ",params.chapterContent);
  //   console.log("Chapter ID ",params.chapterId);
  //   console.log("Record ID ",params.userCourseRecordId);
  // }, [params]);

  const handleChapterFinish = async () => {
    const totalPoints = Number(userPoints) + params.chapterContent?.length * 10;
    const result = await completedChapter(
      params.chapterId,
      params.userCourseRecordId,
      user?.primaryEmailAddress?.emailAddress,
      totalPoints
    );
    if (result) {
      ToastAndroid.show('Successfully Completed!!!', ToastAndroid.LONG);
      setUserPoints(totalPoints);
      setIsChapterComplete(true);
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
