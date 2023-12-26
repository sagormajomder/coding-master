import React from 'react';
import { View } from 'react-native';
import { Path, Svg } from 'react-native-svg';

export default function LogoutSVG() {
  return (
    <View>
      <Svg
        width='50'
        height='50'
        viewBox='0 0 50 50'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <Path
          d='M22.9167 33.3333L14.5833 25M14.5833 25L22.9167 16.6667M14.5833 25H43.75M33.3333 33.3333V35.4167C33.3333 37.0743 32.6749 38.664 31.5028 39.8361C30.3306 41.0082 28.7409 41.6667 27.0833 41.6667H12.5C10.8424 41.6667 9.25269 41.0082 8.08058 39.8361C6.90848 38.664 6.25 37.0743 6.25 35.4167V14.5833C6.25 12.9257 6.90848 11.336 8.08058 10.1639C9.25269 8.99182 10.8424 8.33334 12.5 8.33334H27.0833C28.7409 8.33334 30.3306 8.99182 31.5028 10.1639C32.6749 11.336 33.3333 12.9257 33.3333 14.5833V16.6667'
          stroke='#fb5e37'
          stroke-width='2'
          stroke-linecap='round'
          stroke-linejoin='round'
        />
      </Svg>
    </View>
  );
}
