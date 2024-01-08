import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../../Common/Colors';
import OptionItem from './OptionItem';

export default function DetailSection({
  course,
  createUserEnrolledCourse,
  userEnrolledCourse,
}) {
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 15,
        backgroundColor: Colors.WHITE,
        gap: 10,
      }}>
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get('screen').width * 0.85,
          height: 200,
          borderRadius: 15,
        }}
      />
      <View style={{ padding: 10, gap: 20 }}>
        <Text
          style={{
            fontSize: 24,
            color: Colors.BLACK,
            fontWeight: 'bold',
          }}>
          {course.name}
        </Text>

        <View style={{ gap: 10 }}>
          <View style={styles.rowStyle}>
            <OptionItem icon='book-outline'>
              {course?.chapters?.length} Chapters
            </OptionItem>
            <OptionItem icon='md-time-outline'>{course?.time}</OptionItem>
          </View>
          <View style={styles.rowStyle}>
            <OptionItem icon='person-circle-outline'>
              {course?.author}
            </OptionItem>
            <OptionItem icon='cellular-outline'>{course?.level}</OptionItem>
          </View>
        </View>

        <View style={{ gap: 10 }}>
          <Text
            style={{ fontSize: 20, color: Colors.BLACK, fontWeight: '600' }}>
            Description
          </Text>
          <Text style={{ color: Colors.GRAY, lineHeight: 20 }}>
            {course?.description?.markdown}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            gap: 20,
          }}>
          {userEnrolledCourse?.length === 0 ? (
            <TouchableOpacity
              style={{
                padding: 15,
                backgroundColor: Colors.GRAY,
                borderRadius: 15,
              }}
              onPress={() => createUserEnrolledCourse()}>
              <Text
                style={{
                  color: Colors.WHITE,
                  textAlign: 'center',
                  fontSize: 16,
                }}>
                Enroll For Free
              </Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={{
              padding: 15,
              backgroundColor: Colors.PRIMARY,
              borderRadius: 15,
            }}>
            <Text
              style={{
                color: Colors.WHITE,
                textAlign: 'center',
                fontSize: 16,
              }}>
              Membership 80TK/Month
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
