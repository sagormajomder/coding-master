import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useAuth } from '@clerk/clerk-expo';

export default function Home() {
  const { isLoaded, signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Button
        title='Sign Out'
        onPress={() => {
          signOut();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
