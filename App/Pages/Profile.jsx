import { useAuth, useUser } from '@clerk/clerk-react';
import React, { useContext } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '../Common/Colors';
import LogoutSVG from '../Components/SVGIcons/LogoutSVG';
import MyCourseSVG from '../Components/SVGIcons/MyCourseSVG';
import RankingSVG from '../Components/SVGIcons/RankingSVG';
import UpgradeSVG from '../Components/SVGIcons/UpgradeSVG';
import { UserPointsContext } from '../Context/UserPointsContext';
import CoinIcon from './../../assets/images/star.png';

export default function Profile({ navigation }) {
  const { userPoints, setUserPoints } = useContext(UserPointsContext);
  const { signOut } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <View style={styles.profileContainer}>
      {/* Heading */}
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Profile</Text>
      </View>

      {/* Information */}
      <View style={styles.infoContainer}>
        {/* Personal Info */}
        <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />
        <View style={styles.infoTextContainer}>
          <Text style={styles.nameText}>{user?.fullName}</Text>
          <Text style={styles.emailText}>
            {user?.primaryEmailAddress?.emailAddress}
          </Text>
        </View>
        {/* Points */}
        <View style={styles.coinContainer}>
          <Image source={CoinIcon} style={styles.coinImg} />
          <Text style={styles.coinText}>{userPoints} Points</Text>
        </View>
      </View>

      {/* Tab Information */}
      <View style={styles.tabContainer}>
        {/* My Course Tab */}
        <Pressable
          style={styles.tabStyle}
          onPress={() => navigation.navigate('my-course')}>
          <MyCourseSVG />
          <Text style={styles.tabTextStyle}>My Course</Text>
        </Pressable>
        {/* Upgrade Tab */}
        <Pressable style={styles.tabStyle} onPress={() => null}>
          <UpgradeSVG />
          <Text style={styles.tabTextStyle}>Upgrade Plan</Text>
        </Pressable>
        {/* Ranking Tab */}
        <Pressable
          style={styles.tabStyle}
          onPress={() => navigation.navigate('leader-board')}>
          <RankingSVG />
          <Text style={styles.tabTextStyle}>Ranking</Text>
        </Pressable>
        {/* Logout Tab */}
        <Pressable style={styles.tabStyle} onPress={() => signOut()}>
          <LogoutSVG />
          <Text style={styles.tabTextStyle}>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
    gap: 40,
  },
  headingContainer: {
    backgroundColor: Colors.PRIMARY,
    height: 180,
    padding: 25,
  },
  headingText: { fontSize: 40, color: Colors.WHITE, fontWeight: 'bold' },
  infoContainer: { alignItems: 'center', marginTop: '-32%', gap: 20 },

  profileImage: {
    height: 150,
    width: 150,
    borderRadius: 999,
  },
  infoTextContainer: { alignItems: 'center', gap: 5 },
  nameText: { fontSize: 30, color: Colors.BLACK },
  emailText: { fontSize: 16, color: Colors.BLACK },
  coinContainer: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  coinImg: { height: 25, width: 25 },
  coinText: { color: Colors.GRAY, fontSize: 20 },
  tabContainer: { paddingHorizontal: 50, gap: 15 },
  tabStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    borderBottomWidth: 0.6,
    borderColor: 'rgba(0, 0, 0, 0.13)',
    paddingVertical: 8,
  },
  tabTextStyle: { fontSize: 23, color: Colors.BLACK },
});
