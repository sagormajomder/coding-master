import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import BronzeMedal from './../../assets/images/bronze-medal.png';
import GoldMedal from './../../assets/images/gold-medal.png';
import SilverMedal from './../../assets/images/silver-medal.png';
import Colors from './../Common/Colors';
import { getAllUsers } from './../Services/index';

export default function LeaderBoard() {
  const [userList, setUserList] = useState([]);
  useEffect(function () {
    getAllUserDetails();
  }, []);

  const getAllUserDetails = async () => {
    const result = await getAllUsers();
    // console.log(result);
    if (result) setUserList(result?.userDetails);
  };

  return (
    <View>
      <View
        style={{ height: 160, padding: 20, backgroundColor: Colors.PRIMARY }}>
        <Text style={{ fontSize: 30, color: Colors.WHITE }}>Leader Board</Text>
      </View>
      <View style={{ marginTop: -40, height: '85%' }}>
        <FlatList
          data={userList}
          style={{}}
          renderItem={itemData => (
            <View
              style={{
                padding: 20,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: Colors.WHITE,
                margin: 8,
                marginHorizontal: 15,
                borderRadius: 15,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 10,
                }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: 'bold',
                    color: Colors.GRAY,
                  }}>
                  {itemData.index + 1}
                </Text>
                <Image
                  source={{ uri: itemData.item.profileImage }}
                  style={{ width: 60, height: 60, borderRadius: 999 }}
                />
                <View>
                  <Text style={{ fontSize: 20, fontWeight: '600' }}>
                    {itemData.item.userName}
                  </Text>
                  <Text style={{ fontSize: 16, color: Colors.GRAY }}>
                    {itemData.item.point} Points
                  </Text>
                </View>
              </View>
              {itemData.index < 3 ? (
                <Image
                  source={
                    itemData.index + 1 === 1
                      ? GoldMedal
                      : itemData.index + 1 === 2
                      ? SilverMedal
                      : BronzeMedal
                  }
                  style={{ width: 40, height: 40 }}
                />
              ) : null}
            </View>
          )}
          keyExtractor={(item, index) => item?.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
