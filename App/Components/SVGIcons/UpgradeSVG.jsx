import React from 'react';
import { View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export default function UpgradeSVG() {
  return (
    <View>
      <Svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <Path
          d='M18.75 25L22.9167 29.1667L31.25 20.8333M42.9542 12.4667C36.3669 12.8165 29.9099 10.5388 25 6.13333C20.0901 10.5388 13.6331 12.8165 7.04584 12.4667C6.5157 14.519 6.24829 16.6303 6.25001 18.75C6.25001 30.3979 14.2167 40.1875 25 42.9625C35.7833 40.1875 43.75 30.4 43.75 18.75C43.75 16.5792 43.4729 14.475 42.9542 12.4667Z'
          stroke='#fb5e37'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    </View>
  );
}
