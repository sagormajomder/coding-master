import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Colors from './App/Common/Colors';
import { CompletedChapterContext } from './App/Context/CompletedChapterContext';
import { UserPointsContext } from './App/Context/UserPointsContext';
import TabNavigation from './App/Navigations/TabNavigation';
import Login from './App/Pages/Login';

export default function App() {
  const [isChapterComplete, setIsChapterComplete] = useState(false);
  const [userPoints, setUserPoints] = useState(10);
  return (
    <ClerkProvider
      publishableKey={Constants.expoConfig.extra.clerkPublishableKey}>
      <UserPointsContext.Provider value={{ userPoints, setUserPoints }}>
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
      </UserPointsContext.Provider>
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
