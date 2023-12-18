import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Colors from '../Common/Colors';
import LoginImage from './../../assets/gif/Programming.gif';

export default function Login() {
  return (
    <View style={styles.container}>
      <Image source={LoginImage} style={styles.loginImage} />
      <View style={styles.loginContainer}>
        <View>
          <Text style={styles.headingText}>Welcome to</Text>
          <Text style={styles.headingText}>{'< Coding Master />'}</Text>
          <Text style={styles.subHeadingText}>
            Your Ultimate Programming Learning Toolkit
          </Text>
          <TouchableOpacity style={styles.button}>
            <Ionicons
              name='logo-google'
              size={24}
              color='white'
              style={{ marginRight: 10 }}
            />
            <Text style={styles.buttonText}>Sign In with Google</Text>
          </TouchableOpacity>
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
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    marginTop: 30,
    marginHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 999,
  },
  buttonText: { color: Colors.WHITE, fontSize: 16 },
});
