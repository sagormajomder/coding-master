import React from 'react';
import { View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export default function MyCourseSVG() {
  return (
    <View>
      <Svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <Path
          d='M25 13.0271V40.1104M25 13.0271C22.5667 11.4104 19.2625 10.4167 15.625 10.4167C11.9875 10.4167 8.68333 11.4104 6.25 13.0271V40.1104C8.68333 38.4937 11.9875 37.5 15.625 37.5C19.2625 37.5 22.5667 38.4937 25 40.1104M25 13.0271C27.4333 11.4104 30.7375 10.4167 34.375 10.4167C38.0146 10.4167 41.3167 11.4104 43.75 13.0271V40.1104C41.3167 38.4937 38.0146 37.5 34.375 37.5C30.7375 37.5 27.4333 38.4937 25 40.1104'
          stroke='#fb5e37'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    </View>
  );
}
