import { useUser } from '@clerk/clerk-expo';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Image } from 'react-native';
import Colors from '../Common/Colors';
import LeaderBoard from '../Pages/LeaderBoard';
import MyCourse from '../Pages/MyCourse';
import Profile from '../Pages/Profile';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 3,
        },
        tabBarLabelStyle: { fontSize: 12 },
      }}>
      <Tab.Screen
        name='home'
        component={HomeNavigation}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='home' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='my-course'
        component={MyCourse}
        options={{
          tabBarLabel: 'My Course',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='book' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='leader-board'
        component={LeaderBoard}
        options={{
          tabBarLabel: 'Leader Board',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name='leaderboard' size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='profile'
        component={Profile}
        options={{
          tabBarLabel: 'You',
          tabBarIcon: ({ size }) => (
            <Image
              source={{ uri: user?.imageUrl }}
              style={{ width: size, height: size, borderRadius: 999 }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
