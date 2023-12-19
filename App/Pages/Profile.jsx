import { useAuth } from '@clerk/clerk-react';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
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
