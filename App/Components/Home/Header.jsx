import { useUser } from '@clerk/clerk-expo';
import React, { useContext } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { UserPointsContext } from '../../Context/UserPointsContext';
import CoinIcon from './../../../assets/images/star.png';
import Colors from './../../Common/Colors';
import SearchBar from './SearchBar';

export default function Header() {
  const { userPoints, setUserPoints } = useContext(UserPointsContext);
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={[styles.rowStyle, styles.innerHeaderContainer]}>
        <View style={[styles.rowStyle, styles.profileContainer]}>
          <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />
          <View>
            <Text style={styles.colorWhite}>Hello,👋</Text>
            <Text style={[styles.colorWhite, styles.nameText]}>
              {user?.fullName}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: 'center' }}>
          <Image source={CoinIcon} style={styles.coinImage} />
          <Text style={styles.colorWhite}>{userPoints}</Text>
        </View>
      </View>
      <SearchBar />
    </View>
  );
}

const styles = StyleSheet.create({
  // General
  rowStyle: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  colorWhite: { color: Colors.WHITE },
  // Main
  container: { gap: 30 },
  innerHeaderContainer: {
    justifyContent: 'space-between',
  },
  profileContainer: {
    gap: 10,
  },
  profileImage: { width: 45, height: 45, borderRadius: 999 },
  nameText: { fontSize: 18, fontWeight: 'bold' },
  coinImage: { width: 35, height: 35 },
});
