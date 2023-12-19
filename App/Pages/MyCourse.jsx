import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MyCourse() {
  return (
    <View style={styles.container}>
      <Text>My course</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
