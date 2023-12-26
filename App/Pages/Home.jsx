import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../Components/Home/Header';

export default function Home() {
  return (
    <View style={styles.homeContainer}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
  },
});
