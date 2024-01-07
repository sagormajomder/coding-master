import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../Common/Colors';

export default function CourseItem({ itemData }) {
  return (
    <View style={styles.flatListContainer}>
      <Image
        source={{ uri: itemData?.item?.banner?.url }}
        style={styles.bannerStyle}
      />
      <View style={styles.metaInfoCointainer}>
        <Text style={styles.courseTitleStyle}>{itemData?.item?.name}</Text>
        <View style={styles.innerMetaInfoContainer}>
          <View style={styles.iconTextStyle}>
            <Ionicons name='book-outline' size={24} color='black' />
            <Text style={{ color: Colors.BLACK }}>
              {itemData?.item?.chapters?.length} Chapters
            </Text>
          </View>
          <View style={styles.iconTextStyle}>
            <Ionicons name='md-time-outline' size={24} color='black' />
            <Text style={{ color: Colors.BLACK }}>{itemData?.item?.time}</Text>
          </View>
        </View>
        <View style={styles.innerMetaInfoContainer}>
          <Text style={styles.priceStyle}>
            {itemData?.item?.price === 0 ? 'Free' : itemData?.item?.price}
          </Text>
          <Image
            source={{ uri: itemData?.item?.icon?.url }}
            style={styles.iconStyle}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flatListContainer: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    gap: 15,
    borderRadius: 15,
  },
  bannerStyle: { width: 210, height: 120, borderRadius: 15 },
  metaInfoCointainer: { padding: 7, gap: 5 },
  courseTitleStyle: { fontSize: 17, color: Colors.BLACK },
  innerMetaInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  priceStyle: { color: Colors.PRIMARY, fontWeight: '600' },
  iconStyle: { width: 25, height: 25 },
});
