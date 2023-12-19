import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from './../../hooks/warmUpBrowser';
import Colors from '../Common/Colors';
import { Ionicons } from '@expo/vector-icons';

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error('OAuth error', err);
    }
  }, []);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Ionicons name='logo-google' size={24} color={Colors.WHITE} />
      <Text style={styles.buttonText}>Sign In with Google</Text>
    </TouchableOpacity>
  );
};
export default SignInWithOAuth;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PRIMARY,
    gap: 10,
    marginTop: 30,
    marginHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 999,
  },
  buttonText: { color: Colors.WHITE, fontSize: 16 },
});
