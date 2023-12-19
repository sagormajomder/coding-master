import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import Colors from '../Common/Colors';
import LoginImage from './../../assets/gif/Programming.gif';
import SignInWithOAuth from '../Components/SignInWithOAuth';

export default function Login() {
  return (
    <View>
      <Image source={LoginImage} style={styles.loginImage} />
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.headingText}>Welcome to</Text>
          <Text style={styles.headingText}>{'< Coding Master />'}</Text>
          <Text style={styles.subHeadingText}>
            Your Ultimate Programming Learning Toolkit
          </Text>
          <SignInWithOAuth />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  loginImage: {
    objectFit: 'contain',
    width: Dimensions.get('screen').width,
  },
  loginContainer: {
    height: '100%',
    marginTop: -20,
  },
  headingText: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  subHeadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    color: Colors.GRAY,
  },
});
