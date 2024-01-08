import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Colors from './../../Common/Colors';

export default function ProgressBar({ contentLength, contentPosition }) {
  const simpArray = Array.from(
    { length: contentLength },
    (_, index) => index + 1
  );

  const width = 100 / contentLength;

  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 20,
        padding: 5,
      }}>
      {simpArray.map((item, index) => (
        <View
          key={index}
          style={{
            backgroundColor: `${
              index <= contentPosition ? Colors.PRIMARY : Colors.GRAY
            }`,
            width: width + '%',
            height: 10,
            borderRadius: 15,
            flex: 1,
          }}></View>
      ))}
    </View>
  );
}
