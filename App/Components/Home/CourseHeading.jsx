import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SubHeading({ textColor, children }) {
  return (
    <View>
      <Text style={[styles.textStyle, { color: textColor }]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
  },
});
