import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from './App/Common/Colors';
import { CompletedChapterContext } from './App/Context/CompletedChapterContext';
import TabNavigation from './App/Navigations/TabNavigation';
import Login from './App/Pages/Login';

export default function App() {
  const [isChapterComplete, setIsChapterComplete] = useState(false);
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <CompletedChapterContext.Provider
        value={{ isChapterComplete, setIsChapterComplete }}>
        <View style={styles.container}>
          <SignedIn>
            <NavigationContainer>
              <TabNavigation />
            </NavigationContainer>
          </SignedIn>
          <SignedOut>
            <Login />
          </SignedOut>
        </View>
      </CompletedChapterContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    backgroundColor: Colors.WHITE,
  },
});
