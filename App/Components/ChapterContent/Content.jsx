import React from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../Common/Colors';
import ContentItem from './ContentItem';

export default function Content({
  chapterContent,
  onActivePosition,
  onChapterFinish,
}) {
  let contentRef;
  const onNextBtnPress = index => {
    if (chapterContent?.length <= index + 1) {
      onChapterFinish();
      return;
    }
    onActivePosition();
    contentRef.scrollToIndex({ animated: true, index: index + 1 });
  };
  return (
    <View>
      <FlatList
        data={chapterContent}
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        ref={ref => {
          contentRef = ref;
        }}
        renderItem={itemData => {
          return (
            <View
              style={{
                width: Dimensions.get('screen').width * 0.9,
                padding: 5,
              }}>
              <ScrollView
                style={{
                  marginBottom: 70,
                }}
                showsVerticalScrollIndicator={false}>
                <Text
                  style={{ fontSize: 22, fontWeight: '600', marginTop: 30 }}>
                  {itemData?.item?.heading}
                </Text>
                <ContentItem
                  description={itemData?.item?.description?.html}
                  output={itemData?.item?.output?.html}
                />

                <TouchableOpacity
                  onPress={() => onNextBtnPress(itemData.index)}>
                  <Text
                    style={{
                      padding: 15,
                      fontSize: 17,
                      backgroundColor: Colors.PRIMARY,
                      borderRadius: 15,
                      color: Colors.WHITE,
                      textAlign: 'center',
                      marginBottom: 20,
                      marginTop: 20,
                    }}>
                    {chapterContent?.length > itemData?.index + 1
                      ? 'Next'
                      : 'Finish'}
                  </Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          );
        }}
        keyExtractor={(item, index) => item?.id}
      />
    </View>
  );
}
