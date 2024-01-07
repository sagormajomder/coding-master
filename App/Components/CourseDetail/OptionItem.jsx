import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Colors from '../../Common/Colors';

export default function OptionItem({ icon, children }) {
  return (
    <View style={styles.iconTextStyle}>
      <Ionicons name={icon} size={24} color={Colors.BLACK} />
      <Text style={{ color: Colors.BLACK }}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconTextStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
