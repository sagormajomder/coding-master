import { StatusBar } from 'expo-status-bar';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Login from './App/Pages/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import Constants from 'expo-constants';
import Home from './App/Pages/Home';

export default function App() {
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <View style={styles.container}>
        <SignedIn>
          <Home />
        </SignedIn>
        <SignedOut>
          <Login />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
