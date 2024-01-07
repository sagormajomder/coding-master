import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../Pages/Home';
import CourseDetail from './../Pages/CourseDetail';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name='course-detail' component={CourseDetail} />
    </Stack.Navigator>
  );
}
