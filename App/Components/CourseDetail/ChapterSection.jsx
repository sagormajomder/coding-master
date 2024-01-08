import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import Colors from '../../Common/Colors';

export default function ChapterSection({ chapterList }) {
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 15,
              borderWidth: 1,
              borderRadius: 10,
              borderColor: Colors.GRAY,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
              }}>
              <Text
                style={{
                  fontSize: 27,
                  fontWeight: '600',
                  color: Colors.GRAY,
                }}>
                {index < 10 ? '0' + index : index}
              </Text>
              <Text style={{ fontSize: 21, color: Colors.GRAY }}>
                {item.title}
              </Text>
            </View>
            {/* <Ionicons name='play-circle' size={25} color={Colors.GRAY} /> */}
            <Ionicons name='md-lock-closed' size={25} color={Colors.GRAY} />
          </View>
        ))}
      </View>
    )
  );
}
